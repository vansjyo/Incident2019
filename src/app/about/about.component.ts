import { Component, OnInit } from '@angular/core';

const ABOUT_DESC = `Lorem ipsum dolor sit amet, ius reque constituam adversarium
 in, pro et illum adipisci oportere. An eos denique consequuntur. Eum ei saepe
 alienum propriae, audire delicata voluptaria at pri. In ridens antiopam sea.`;

const HISTORY = [
  {
    'year': '2018',
    'image': 'assets/images/inci_night.jpg',
    'desc': `Lorem ipsum dolor sit amet, ferri omittantur adversarium vel ei, te
    diam scripserit vel, ea erant probatus per. Has in reque nullam, nec eu
    iusto accusam eloquentiam. Vis ex justo iriure elaboraret. Cu discere
    suscipiantur eos. Ea pri ludus minimum indoctum, omittam ponderum mei ea.
    Partiendo vituperatoribus at mei, meis vocibus eos et, at dicta vivendo
    appetere ius. Partem aperiri oportere eum ex. Quaestio laboramus nam eu.
    Ea per wisi conceptam democritum, ut eam alterum consequat, nominavi
    percipit mei ei. Insolens conceptam vim at, has et wisi nominati
    conceptam, iudico consul numquam has ea. Lorem ipsum dolor sit amet, ferri
    omittantur adversarium vel ei, te diam scripserit vel, ea erant probatus
    per. Has in reque nullam, nec eu iusto accusam eloquentiam. Vis ex justo
    iriure elaboraret. Cu discere suscipiantur eos. Ea pri ludus minimum
    indoctum, omittam ponderum mei ea. Partiendo vituperatoribus at mei,
    meis vocibus eos et, at dicta vivendo appetere ius. Partem aperiri oportere
    eum ex. Quaestio laboramus nam eu. Ea per wisi conceptam democritum, ut eam
    alterum consequat, nominavi percipit mei ei. Insolens conceptam vim at, has
    et wisi nominati conceptam, iudico consul numquam has ea.`
  },
  {
    'year': '2017',
    'image': 'assets/images/inci_night.jpg',
    'desc': `Lorem ipsum dolor sit amet, ferri omittantur adversarium vel ei, te
    diam scripserit vel, ea erant probatus per. Has in reque nullam, nec eu
    iusto accusam eloquentiam. Vis ex justo iriure elaboraret. Cu discere
    suscipiantur eos. Ea pri ludus minimum indoctum, omittam ponderum mei ea.
    Partiendo vituperatoribus at mei, meis vocibus eos et, at dicta vivendo
    appetere ius. Partem aperiri oportere eum ex. Quaestio laboramus nam eu.
    Ea per wisi conceptam democritum, ut eam alterum consequat, nominavi
    percipit mei ei. Insolens conceptam vim at, has et wisi nominati
    conceptam, iudico consul numquam has ea. Lorem ipsum dolor sit amet, ferri
    omittantur adversarium vel ei, te diam scripserit vel, ea erant probatus
    per. Has in reque nullam, nec eu iusto accusam eloquentiam. Vis ex justo
    iriure elaboraret. Cu discere suscipiantur eos. Ea pri ludus minimum
    indoctum, omittam ponderum mei ea. Partiendo vituperatoribus at mei,
    meis vocibus eos et, at dicta vivendo appetere ius. Partem aperiri oportere
    eum ex. Quaestio laboramus nam eu. Ea per wisi conceptam democritum, ut eam
    alterum consequat, nominavi percipit mei ei. Insolens conceptam vim at, has
    et wisi nominati conceptam, iudico consul numquam has ea.`
  },
  {
    'year': '2016',
    'image': 'assets/images/inci_night.jpg',
    'desc': `Lorem ipsum dolor sit amet, ferri omittantur adversarium vel ei, te
    diam scripserit vel, ea erant probatus per. Has in reque nullam, nec eu
    iusto accusam eloquentiam. Vis ex justo iriure elaboraret. Cu discere
    suscipiantur eos. Ea pri ludus minimum indoctum, omittam ponderum mei ea.
    Partiendo vituperatoribus at mei, meis vocibus eos et, at dicta vivendo
    appetere ius. Partem aperiri oportere eum ex. Quaestio laboramus nam eu.
    Ea per wisi conceptam democritum, ut eam alterum consequat, nominavi
    percipit mei ei. Insolens conceptam vim at, has et wisi nominati
    conceptam, iudico consul numquam has ea. Lorem ipsum dolor sit amet, ferri
    omittantur adversarium vel ei, te diam scripserit vel, ea erant probatus
    per. Has in reque nullam, nec eu iusto accusam eloquentiam. Vis ex justo
    iriure elaboraret. Cu discere suscipiantur eos. Ea pri ludus minimum
    indoctum, omittam ponderum mei ea. Partiendo vituperatoribus at mei,
    meis vocibus eos et, at dicta vivendo appetere ius. Partem aperiri oportere
    eum ex. Quaestio laboramus nam eu. Ea per wisi conceptam democritum, ut eam
    alterum consequat, nominavi percipit mei ei. Insolens conceptam vim at, has
    et wisi nominati conceptam, iudico consul numquam has ea.`
  }
];

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutDesc = ABOUT_DESC;
  history = HISTORY;

  constructor() { }

  ngOnInit() {
  }

}
