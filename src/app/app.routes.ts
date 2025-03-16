// app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import{education}from '../app/education/education'
import{experience}from '../app/experience/experience'
import{contact}from '../app/contact/contact'
import{project}from '../app/project/project'
import { NgModule } from '@angular/core';
import { about } from './about/about';
export const routes: Routes = [
  
  { path: 'about',component: about},
  { path: '**', redirectTo: '/about', pathMatch: 'full' },
  { path: 'education', component: education },
  { path: 'experience', component: experience },
  { path: 'project', component: project },
  { path: 'contact', component: contact }

  
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }