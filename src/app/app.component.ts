import { Component } from '@angular/core';
import * as $ from 'jquery';

export function isHome() {
  return window.location.pathname === '/';
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}
