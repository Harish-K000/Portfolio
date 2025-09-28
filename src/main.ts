import { provideRouter, withComponentInputBinding } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { contact } from './app/contact/contact';
import { resumePage } from './app/resume/resume';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: resumePage },
      { path: 'intro', component: resumePage },
      { path: 'about', component: resumePage },
      { path: 'education', component: resumePage },
      { path: 'experience', component: resumePage },
      { path: 'project', component: resumePage },
      { path: 'projects', component: resumePage },
      { path: 'contact', component: contact },
      { path: '**', redirectTo: '' }
    ], withComponentInputBinding())
  ]
}).catch(err => console.error(err));
