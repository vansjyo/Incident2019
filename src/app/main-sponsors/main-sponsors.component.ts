import { Component, OnInit } from '@angular/core';
import { isHome } from '../app.component';
declare const require;

const SPONSORS = require('../../assets/data/sponsors.json');
isHome();
@Component({
  selector: 'app-main-sponsors',
  templateUrl: './main-sponsors.component.html',
  styleUrls: ['./main-sponsors.component.css']
})
export class MainSponsorsComponent implements OnInit {
  sponsors = SPONSORS;
  isHome(){
    return isHome();
  }
  constructor() {}

  ngOnInit() {}
}
