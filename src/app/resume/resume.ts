import { Component } from '@angular/core';
import { intro } from '../intro/intro';
import { about } from '../about/about';
import { education } from '../education/education';
import { experience } from '../experience/experience';
import { project } from '../project/project';

@Component({
    selector: 'resume-page',
    templateUrl: '..//resume/resume.html',
    styleUrl: '..//resume/resume.scss',
    standalone: true,
    imports: [intro, about, education, experience, project]
})
export class resumePage { }
