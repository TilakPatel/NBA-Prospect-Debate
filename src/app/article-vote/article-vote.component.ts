import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player-model';
import { Analysis } from '../models/analysis-model'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-article-vote',
  templateUrl: './article-vote.component.html',
  styleUrls: ['./article-vote.component.css']
})
export class ArticleVoteComponent implements OnInit {
  currentPlayer: Player = new Player();
  analysisOne: Analysis;
  analysisTwo: Analysis;
  serverURL: string = environment.URL;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchRandomInfo();
  }

  fetchRandomInfo() {
    this.currentPlayer.name = "🏀🏀🏀LOADING🏀🏀🏀";
    this.http.get<Player>(this.serverURL + '/randomPlayer'
    ).subscribe(dat => {
      this.currentPlayer = dat;
      this.analysisOne = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
      this.analysisTwo = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
      if ((this.analysisOne === this.analysisTwo) || this.analysisOne.analysis === 'vote for the other one' || this.analysisTwo.analysis === 'vote for the other one') {
        this.analysisOne = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
        this.analysisTwo = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
        if ((this.analysisOne === this.analysisTwo) || this.analysisOne.analysis === 'vote for the other one' || this.analysisTwo.analysis === 'vote for the other one') {
          this.analysisOne = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
          this.analysisTwo = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
          if ((this.analysisOne === this.analysisTwo) || this.analysisOne.analysis === 'vote for the other one' || this.analysisTwo.analysis === 'vote for the other one') {
            this.analysisOne = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
            this.analysisTwo = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
            if ((this.analysisOne === this.analysisTwo) || this.analysisOne.analysis === 'vote for the other one' || this.analysisTwo.analysis === 'vote for the other one') {
              this.analysisOne = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
              this.analysisTwo = this.currentPlayer.analysises[Math.floor(Math.random() * this.currentPlayer.analysises.length)];
            }
          }
        }
      }
    },
      err => {
        console.log(err);
      }
    );

  }

  vote(option: Number) {
    if(option === 1){
      console.log('1');
    } else {
      console.log('2');
    }
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
