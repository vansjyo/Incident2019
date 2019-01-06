import { Component, OnInit } from '@angular/core';
import {isHome, getPath} from '../app.component';
import * as $ from 'jquery';
declare const require;

const SOCIAL = require('../../assets/data/social.json');

function toggleMenu() {
  const header = $('.header');
  const i = $('.header i');
  const height = header.height() === 80 ? '500px' : '80px';
  const iHTML = i.html() === 'menu' ? 'close' : 'menu';
  i.html(iHTML);
  setTimeout(() => {
    header.css('max-height', height);
  }, 0);
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  isHome = isHome;
  social = SOCIAL;
  getPath = getPath;

  ngOnInit() {
    console.log(this.getPath());
    $('.header i').click(toggleMenu);
    $('.header .' + this.getPath()).css({
      'opacity': '0.7',
    });
    $('.header .' + this.getPath()).attr('href', 'javascript: void()');
    $('.header .' + this.getPath()).click(toggleMenu);
  }
}
