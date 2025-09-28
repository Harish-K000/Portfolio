// app.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBar } from './navbar/navBar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [navBar, RouterOutlet],
})
export class AppComponent implements OnInit, OnDestroy {
  isExpanded = false;
  isMobileNavOpen = false;

  ngOnInit() {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      // Listen for close mobile nav event
      window.addEventListener('closeMobileNav', () => {
        this.closeMobileNav();
      });
    }
  }

  ngOnDestroy() {
    // Check if we're in browser environment
    if (typeof window !== 'undefined') {
      window.removeEventListener('closeMobileNav', () => {
        this.closeMobileNav();
      });
    }
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }
}
