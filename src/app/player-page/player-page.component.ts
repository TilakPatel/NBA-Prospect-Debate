import { Component, OnInit } from '@angular/core';
import { JQueryStatic } from 'node_modules/jquery';

declare var $: JQueryStatic;
@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  constructor() { $('[data-toggle="tooltip"]').tooltip();  }

  ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip(); 
  }

}
