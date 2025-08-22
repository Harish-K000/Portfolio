import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { socialMediaIcon } from '../socialmediaicon/socialmediaicon';
@Component({
    selector: 'navbar',
    templateUrl: '..//navbar/navBar.html',
    styleUrl: '..//navbar/navBar.scss',
    imports: [RouterLink,socialMediaIcon],
})

export class navBar{}

