import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-icare',
  templateUrl: './icare.component.html',
  styleUrls: ['./icare.component.css']
})
export class IcareComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Incident 2019 - iCare');
  }

  ngOnInit() {
  }

}
