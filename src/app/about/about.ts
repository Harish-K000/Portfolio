import { Component } from '@angular/core';
import { navBar } from "../navbar/navBar";

@Component({
    selector: 'about',
    templateUrl: '..//about/about.html',
    styleUrl: '..//about/about.scss',
    standalone: true,
    imports: [navBar]
})

export class about{
    email = 'asureshk@buffalo.edu';
}

