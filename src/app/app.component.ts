// app.component.ts
import { Component } from '@angular/core';
import { Portfolio } from './portfolio.model';
import { RouterOutlet } from '@angular/router';
import {StarFieldComponent} from './starbackground/starbackground'
import { navBar } from "./navbar/navBar";
import { about } from "./about/about";
import { experience } from "./experience/experience";
import { education } from "./education/education";
import { project } from "./project/project";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [ navBar, about, experience,education,project],
})


export class AppComponent {}
