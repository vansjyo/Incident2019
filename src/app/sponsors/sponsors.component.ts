import { Component, OnInit } from '@angular/core';
import { isHome } from '../app.component';
declare const require;

const SPONSORS = require('../../assets/data/sponsors.json');
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  sponsors = SPONSORS;
  isHome = isHome;
  constructor() {}

  ngOnInit() {}
}
