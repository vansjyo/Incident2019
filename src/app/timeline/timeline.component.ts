import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { isDevMode } from '@angular/core';
import * as $ from 'jquery';
import * as materialize from 'materialize-css';
declare const require;

const TIMELINE = require('../../assets/data/timeline.json');


let instance;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {

  isDevMode = isDevMode;
  timeline = TIMELINE;
  getparsed(puttime){
    return new Date(puttime);
  }
  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Timeline');
    console.log(typeof Date.parse("2011-07-14T19:43:37+0530"));
  }
  now = new Date()
  ngOnInit() {
    instance = this;
    instance.list = undefined;
 
  }

}
