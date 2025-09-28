import { Component } from '@angular/core';
import { navBar } from "../navbar/navBar";
import { resumeButton } from "../resumeButton/resumeBt";
import { profilepicture } from "../profilepicture/profilepicture";
import { socialMediaIcon } from '../socialmediaicon/socialmediaicon';
import { CursorAnimationComponent } from '../rotatingwords/rotatingwords';
import { TechMarqueeComponent } from '../techicons/techicons';

@Component({
    selector: 'about',
    templateUrl: '..//about/about.html',
    styleUrl: '..//about/about.scss',
    standalone: true,
    imports: [profilepicture,TechMarqueeComponent]
})

export class about{
    email = 'asureshk@buffalo.edu';
}

