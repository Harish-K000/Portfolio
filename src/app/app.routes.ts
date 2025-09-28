// app.routes.ts
import { RouterModule, Routes } from '@angular/router';
import{education}from '../app/education/education'
import{experience}from '../app/experience/experience'
import{contact}from '../app/contact/contact'
import{project}from '../app/project/project'
import { NgModule } from '@angular/core';
import { about } from './about/about';
import { intro } from './intro/intro';

export const routes: Routes = [
  { path: '', component: intro }, // Single route for all content
  { path: 'intro', component: intro },
  { path: '**', redirectTo: '/intro', pathMatch: 'full' },
  
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes,{ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutes { }