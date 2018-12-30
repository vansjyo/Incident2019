import { Component, OnInit } from '@angular/core';
const ABOUT = require('../../assets/data/about.json');




@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutDesc = ABOUT.about_desc;
  history = ABOUT.history;

  constructor() { }

  ngOnInit() {
  }

}
