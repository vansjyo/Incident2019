import { Component } from '@angular/core';
import * as $ from 'jquery';

export function isHome() {
  return window.location.pathname === '/';
}

export function getPath() {
  const path = window.location.pathname.replace('/', '');
  return path === '' ? 'home' : path;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
