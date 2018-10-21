import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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

  constructor() { }

  isHome() {
    return window.location.pathname === '/';
  }

  ngOnInit() {
    $('.header i').click(toggleMenu);
  }

}
