import { Component, OnInit } from '@angular/core';
import {isHome} from '../app.component';
import * as $ from 'jquery';

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

  social = SOCIAL;

  isHome = isHome;

  ngOnInit() {
    $('.header i').click(toggleMenu);
  }
}
