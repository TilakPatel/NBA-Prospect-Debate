import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { JQueryStatic } from 'node_modules/jquery';
import { HttpClient } from '@angular/common/http';
declare var $: JQueryStatic;
@Component({
  selector: 'app-attribute-submit',
  templateUrl: './attribute-submit.component.html',
  styleUrls: ['./attribute-submit.component.css']
})
export class AttributeSubmitComponent implements OnInit {
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
  serverURL: string = environment.URL;
  spinning: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    $('#alert-good').hide();
    $('#alert-bad').hide();
  }
  submit() {
    this.spinning = "fa-spin";
    $('#alert-good').hide();
    $('#alert-bad').hide();
    var name = $("#name").val();
    var athleticism = $("#athleticism").val();
    var size = $("#size").val();
    var defense = $("#defense").val();
    var shooting = $("#shooting").val();
    var nbaReady = $("#nba-readiness").val();
    var dribbling = $("#dribbling").val();
    var potential = $("#potential").val();
    var passing = $("#passing").val();
    var intangibles = $("#intangibles").val();
    var leadership = $("#leadership").val();
    var durability = $("#durability").val();
    this.http.post(this.serverURL + '/attributes',
      {
        athleticism: athleticism,
        size: size,
        defense: defense,
        shooting: shooting,
        nba_ready: nbaReady,
        dribbling: dribbling,
        potential: potential,
        passing: passing,
        intangibles: intangibles,
        leadership: leadership,
        projectedDurability: durability,
        name: name
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
  closeGoodAlert() {
    $('#alert-good').hide();
  }
  closeBadAlert() {
    $('#alert-bad').hide();
  }

}
