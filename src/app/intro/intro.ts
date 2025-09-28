import { Component } from '@angular/core';
import { resumeButton } from "../resumeButton/resumeBt";
import { profilepicture } from "../profilepicture/profilepicture";

@Component({
    selector: 'intro',
    templateUrl: '..//intro/intro.html',
    styleUrl: '..//intro/intro.scss',
    standalone: true,
    imports: [ resumeButton]
})

export class intro{
    email = 'asureshk@buffalo.edu';
}