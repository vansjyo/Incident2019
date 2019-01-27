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
  now = new Date();
  state = this.now.getDate();
  
  display : any;



  getparsed(puttime){
    return new Date(puttime);
  }
  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - Timeline');
    console.log(this.timeline);
    this.timeline.sort(function(a, b){
      var a1 = new Date(a.time_start);
      var b1 = new Date(b.time_start);
      return a1.getTime() - b1.getTime()
    });
    console.log(this.timeline);
    if(this.state!=15 && this.state!=16 && this.state!=17){
      this.state=15;
    }
    this.display = function(stateinput){
      this.state = stateinput;
      return;
    }
  }
  ngOnInit() {
    instance = this;
    instance.list = undefined;
    
 
  }

}
