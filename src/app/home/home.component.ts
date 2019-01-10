import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Player } from '../models/player-model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  serverURL: string = environment.URL;
  playerNames = [
    "Ja Morant",
    "RJ Barrett",
    "Zion Williamson",
    "Bruno Fernando",
    "Keldon Johnson",
    "Cameron Reddish",
    "Rui Hachimura",
    "Kevin Porter",
    "Charles Bassey",
    "Jontay Porter",
    "Bol Bol",
    "Nickeil Alexander-Walker",
    "KZ Okpala",
    "Romeo Langford",
    "Nassir Little",
    "Sekou Doumbouya",
    "Jalen Smith",
    "Naz Reid",
    "Jaylen Hoard",
    "Darius Garland",
    "Jarrett Culver",
    "Daniel Gafford",
    "DeAndre Hunter",
    "Simi Shittu",
    "Goga Bitadze",
    "Jalen McDaniels",
    "Kris Wilkes",
    "Chuma Okeke",
    "Tre Jones",
    "Ignas Brazdeikis",
    "Tyler Bey",
    "Austin Wiley",
    "Jaxson Hayes",
    "Sagaba Konate",
    "Oshae Brissett",
    "Devon Dotson",
    "Quentin Grimes",
    "D'Marcus Simonds",
    "Aric Holman",
    "Luguentz Dort",
    "Carsen Edwards",
    "Coby White",
    "James Palmer",
    "Moses Brown",
    "Admiral Schofield",
    "Udoka Azubuike",
    "TyShon Alexander",
    "Eric Paschall",
    "Killian Tillie",
    "Zach Norvell",
    "Ty Jerome",
    "Jaylen Hands",
    "PJ Washington",
    "Mustapha Heron",
    "Caleb Martin",
    "Bennie Boatwright",
    "Brandon Clarke",
    "Shamorie Ponds",
    "Filip Petrusev",
    "Darius Bazley",
    "Paul Eboua",
    "Charles Matthews",
    "Ky Bowman",
    "Ashton Hagans",
    "Biram Faye",
    "Robert Franks",
    "Talen Horton-Tucker",
    "Kerwin Roach",
    "Louis King",
    "Chris Smith",
    "Adam Mokoka",
    "Cameron Johnson",
    "Rob Edwards",
    "Lagerald Vick",
    "Quinton Rose",
    "Luka Samanic",
    "Lamar Stevens",
    "Zylan Cheatham",
    "Kenny Wooten",
    "Rayshaun Hammonds",
    "Lamar Peters",
    "Dedric Lawson",
    "Brian Bowen",
    "Tyler Herro",
    "Marko Simonovic",
    "Marques Bolden",
    "Terance Mann",
    "Lamont West",
    "Lindell Wigginton",
    "Matisse Thybulle",
    "Alpha Diallo",
    "Dewan Hernandez",
    "Markis McDuffie",
    "Herb Jones",
    "Nick Richards",
    "Aaron Wiggins",
    "Tyus Battle",
    "Cody Martin",
    "Vanja Marinkovic",
    "Borisa Simanic"
  ]
  playerData: Player[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    for (let name of this.playerNames) {
      this.http.post<Player>(this.serverURL + '/getPlayer',
        {
          name: name
        }
      ).subscribe(dat => {
        this.playerData.push(dat);
        this.playerData.sort((a, b) => this.getPlayerScore(b) - this.getPlayerScore(a));
      },
        err => { console.log(err) }
      );
    }
  }

  getAvg(arr: [number]) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total / arr.length;
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
      return word.charAt(0).toUpperCase() + word.slice(1,word.indexOf('-') + 1) + word.charAt(word.indexOf('-') + 1).toUpperCase() + word.slice(word.indexOf('-') + 2);
    }

  }

  capitalizeName(name: String) {
    let arr = name.split(' ');
    let rName : String = '';
    for(let s in arr){
      rName += this.capitalizeWord(arr[s]) + ' ';
    }
    return rName;
  }


}
