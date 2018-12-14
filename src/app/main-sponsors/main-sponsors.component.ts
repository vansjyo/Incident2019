import { Component, OnInit } from '@angular/core';

declare const require;

const SPONSORS = require('../../assets/data/sponsors.json');

@Component({
  selector: 'app-main-sponsors',
  templateUrl: './main-sponsors.component.html',
  styleUrls: ['./main-sponsors.component.css']
})
export class MainSponsorsComponent implements OnInit {

  sponsors = SPONSORS;

  constructor() {
    console.log(this.sponsors);
  }

  ngOnInit() {
  }

}
