import { Component, OnInit } from "@angular/core";
import { isHome } from "../header/header.component";
declare const require;

const SPONSORS = require("../../assets/data/sponsors.json");
isHome();
@Component({
  selector: "app-main-sponsors",
  templateUrl: "./main-sponsors.component.html",
  styleUrls: ["./main-sponsors.component.css"]
})
export class MainSponsorsComponent implements OnInit {
  sponsors = SPONSORS;
  Home = isHome();

  constructor() {}

  ngOnInit() {}
}
