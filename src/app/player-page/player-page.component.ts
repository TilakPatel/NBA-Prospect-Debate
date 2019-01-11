import { Component, OnInit } from '@angular/core';
import { JQueryStatic } from 'node_modules/jquery';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../models/player-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
declare var $: JQueryStatic;
@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  playerName: String;
  serverURL: string = environment.URL;
  player: Player = new Player();
  str: String = 'fsdf';
  analysisText: String;
  analysisContributor: String;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
    this.route.params.subscribe(params => this.playerName = params['name']);
    this.http.post<Player>(this.serverURL + '/getPlayer',
      {
        name: this.playerName
      }
    ).subscribe(dat => {
      console.log(dat);
      this.player = dat;
      this.player.analysises.sort((a, b) => b.popularity - a.popularity);
      if (this.player.analysises[0].analysis === 'vote for the other one') { //empty
        this.analysisText = "No analysis has been written.";
        this.analysisContributor = "No analysis has been written.";
      } else {
        this.analysisText = this.player.analysises[0].analysis;
        this.analysisContributor = this.player.analysises[0].contributor;
      }
    },
      err => { console.log(err) }
    );
  }
  getAvg(arr: [number]) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return (total / arr.length);
  }

  getPlayerScore(player: Player) {
    let ageSubtract;
    if (player.year === 'Fr.') {
      ageSubtract = 0;
    } else if (player.year === 'So.') {
      ageSubtract = -1.5;
    } else if (player.year === 'Jr.') {
      ageSubtract = -3;
    } else if (player.year === 'Sr.') {
      ageSubtract = -4;
    } else if (player.year === 'N/A') {
      ageSubtract = -2.5;
    } else {
      ageSubtract = 2000 - parseInt(player.year, 10);
    }
    let att = player.attributes;
    return (100 * (this.getAvg(att.athleticism) * (2.5 / 115) + this.getAvg(att.defense) * (1 / 115) + this.getAvg(att.dribbling) * (1 / 115) + this.getAvg(att.intangibles) * (0.5 / 115) + this.getAvg(att.leadership) * (0.5 / 115) +
      this.getAvg(att.nba_ready) * (1 / 115) + this.getAvg(att.passing) * (1 / 115) + this.getAvg(att.potential) * (2.5 / 115) + this.getAvg(att.shooting) * (2 / 115) + this.getAvg(att.size) * (1 / 115) - this.getAvg(att.projectedDurability) * (0.5 / 115)) + ageSubtract + 5).toFixed(2);

  }
  capitalizeWord(word: String) {
    if (word.indexOf('-') == -1) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1, word.indexOf('-') + 1) + word.charAt(word.indexOf('-') + 1).toUpperCase() + word.slice(word.indexOf('-') + 2);
    }

  }

  capitalizeName(name: String) {
    let arr = name.split(' ');
    let rName: String = '';
    for (let s in arr) {
      rName += this.capitalizeWord(arr[s]) + ' ';
    }
    return rName;
  }

}
