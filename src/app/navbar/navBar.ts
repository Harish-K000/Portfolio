import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: '..//navbar/navBar.html',
    styleUrl: '..//navbar/navBar.scss',
    imports: [RouterLink],
})

export class navBar{}

