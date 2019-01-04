import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as materialize from 'materialize-css';
import { Title } from '@angular/platform-browser';
declare const require;

const ABOUT = require('../../assets/data/about.json');

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutDesc = ABOUT.about_desc;
  history = ABOUT.history;
  slider = undefined;
  isMobile = () => window.outerWidth <= 800;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - About');
  }

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      const elements = document.querySelectorAll('.about-slider');
      this.slider = materialize.Carousel.init(elements, {
        fullWidth: true,
        indicators: true
      });
      setTimeout(() => {
        setInterval(() => {
          const element = document.querySelectorAll('.about-slider')[0];
          const instance = materialize.Carousel.getInstance(element);
          instance.next();
        }, 6000);
      }, 6000);
    });
  }

}
