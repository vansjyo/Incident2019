import { Component, OnInit } from '@angular/core';

const ICARE_DESC = `Lorem ipsum dolor sit amet, ius reque constituam adversarium
 in, pro et illum adipisci oportere. An eos denique consequuntur. Eum ei saepe
 alienum propriae, audire delicata voluptaria at pri. In ridens antiopam sea.`;

@Component({
  selector: 'app-icare',
  templateUrl: './icare.component.html',
  styleUrls: ['./icare.component.css']
})
export class IcareComponent implements OnInit {

  iCareDesc = ICARE_DESC;

  constructor() { }

  ngOnInit() {
  }

}
