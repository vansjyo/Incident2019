import { Component, OnInit } from '@angular/core';
import { isHome, getPath } from '../app.component';
import * as $ from 'jquery';
declare const require;

const SOCIAL = require('../../assets/data/social.json');

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  social = SOCIAL;
  isHome = isHome;
  getPath = getPath;

  ngOnInit() {
    $('.footer .' + this.getPath()).css({
      'opacity': '0.7',
    });
    $('.footer .' + this.getPath()).attr('href', 'javascript: void()');
  }

}
