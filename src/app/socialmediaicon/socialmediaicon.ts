import { Component,EventEmitter,Output  } from '@angular/core';

@Component({
    selector: 'socialMediaIcon',
    templateUrl: '..//socialmediaicon/socialmediaicon.html',
    styleUrl: '..//socialmediaicon/socialmediaicon.scss',
    standalone: true
})

export class socialMediaIcon{
    @Output() expandChange = new EventEmitter<boolean>();

  onMouseEnter() {
    this.expandChange.emit(true);   // tell parent it's expanded
  }

  onMouseLeave() {
    this.expandChange.emit(false);  // tell parent it's collapsed
  }
}