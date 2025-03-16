import { Component } from '@angular/core';
import { navBar } from "../navbar/navBar";

@Component({
    selector: 'contact',
    templateUrl: '..//contact/contact.html',
    styleUrl: '..//contact/contact.scss',
    standalone: true,
    imports: [navBar]
})

export class contact{
    email = 'asureshk@buffalo.edu';
}