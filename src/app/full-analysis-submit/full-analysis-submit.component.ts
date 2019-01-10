import { Component, OnInit, NgZone } from '@angular/core';
import { JQueryStatic } from 'node_modules/jquery';
import { HttpClient } from '@angular/common/http';

declare var $: JQueryStatic;
@Component({
  selector: 'app-full-analysis-submit',
  templateUrl: './full-analysis-submit.component.html',
  styleUrls: ['./full-analysis-submit.component.css']
})
export class FullAnalysisSubmitComponent implements OnInit {
  players = [
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
  spinning: string = "";
  charCount: string;
  constructor(private http: HttpClient, private zone: NgZone) { }

  ngOnInit() {
    $('#alert-good').hide();
    $('#alert-bad').hide();
    $('#analysis').on('keyup', function () {
      $("#charCountDisplay").html($("#analysis").val().replace(/(?:\r\n|\r|\n)/g, '').length.toString() + ' chars. (100 needed)');
      console.log(this.charCount);
    });
  }

  submit() {
    this.spinning = "fa-spin";
    $('#alert-good').hide();
    $('#alert-bad').hide();
    var analysis = $("#analysis").val();
    var contributor = $("#analysisContributor").val();
    var playerName = $("#playerName").val();

    if (analysis == undefined || contributor == undefined || analysis.length < 100 || contributor.length == 0) {
      $('#alert-bad').show();
      this.spinning = "";
    } else {
      this.http.post('http://localhost:8080/analysis',
        {
          playerName: playerName,
          analysis: analysis,
          analysisContributor: contributor
        }
      ).subscribe(dat => {
        $('#alert-good').show();
        this.spinning = "";
      },
        err => {
          $('#alert-bad').show();
          this.spinning = "";
        }
      );
    }
  }
  closeGoodAlert() {
    $('#alert-good').hide();
  }
  closeBadAlert() {
    $('#alert-bad').hide();
  }


}
