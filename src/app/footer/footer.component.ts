import { Component, OnInit } from '@angular/core';
import { isHome } from '../app.component';

const SOCIAL = {
  'fb': {
    'link': 'facebook.com',
    'image': 'assets/images/social/fb.svg'
  },
  'tw': {
    'link': 'twitter.com',
    'image': 'assets/images/social/tw.svg'
  },
  'yt': {
    'link': 'youtube.com',
    'image': 'assets/images/social/yt.svg'
  },
  'ig': {
    'link': 'instagram.com',
    'image': 'assets/images/social/ig.svg'
  }
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  social = SOCIAL;
  isHome = isHome;

  ngOnInit() {
  }

}
