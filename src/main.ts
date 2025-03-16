import { provideRouter, withComponentInputBinding } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {experience} from './app/experience/experience';
import {contact} from './app/contact/contact';
import {project} from './app/project/project';
import { about } from './app/about/about';
import { education } from './app/education/education';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'about', component: about }, 
      { path: 'education', component: education } ,
      { path: '', redirectTo: '/about', pathMatch: 'full' } ,
      { path: 'experience', component: experience } ,
      { path: 'project', component: project } ,
      { path: 'contact', component: contact } ,
      { path: '**', redirectTo: '/about' } // No pathMatch needed for wildcard
    ], withComponentInputBinding())
  ]
}).catch(err => console.error(err));