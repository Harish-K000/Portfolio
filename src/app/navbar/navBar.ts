import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { socialMediaIcon } from '../socialmediaicon/socialmediaicon';

@Component({
    selector: 'navbar',
    templateUrl: '..//navbar/navBar.html',
    styleUrl: '..//navbar/navBar.scss',
    standalone: true,
    imports: [RouterLink, socialMediaIcon, CommonModule],
})
export class navBar {
  currentSection = '';
  isContactView = false;
  @Output() expanded = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.updateRouteState(this.router.url);

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateRouteState(event.urlAfterRedirects);
      });
  }

  private isBrowserEnv(): boolean {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }

  @HostListener('window:scroll')
  updateActiveSection() {
    if (!this.isBrowserEnv() || this.isContactView) {
      return;
    }

    const sections = ['intro', 'about', 'education', 'experience', 'projects'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.currentSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(section: string) {
    const targetPath = section === 'intro' ? '/' : '/' + section;
    const isBrowser = this.isBrowserEnv();

    if (this.isContactView) {
      this.router.navigateByUrl(targetPath).then(() => {
        if (!isBrowser) {
          return;
        }
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.currentSection = section;
          }
        }, 100);
      });
      this.closeMobileNav();
      return;
    }

    if (!isBrowser) {
      this.router.navigateByUrl(targetPath);
      this.closeMobileNav();
      return;
    }

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.currentSection = section;
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', targetPath);
      }
      this.closeMobileNav();
    }
  }

  isActive(section: string): boolean {
    return this.currentSection === section;
  }

  onExpandChange(state: boolean) {
    this.expanded.emit(state);  // forward event to parent
  }

  closeMobileNav() {
    if (typeof window !== 'undefined') {
      const event = new CustomEvent('closeMobileNav');
      window.dispatchEvent(event);
    }
  }

  isContactRoute(): boolean {
    return this.isContactView;
  }

  private updateRouteState(url: string) {
    this.isContactView = url.startsWith('/contact');
    if (this.isContactView) {
      this.currentSection = '';
    } else {
      this.updateActiveSection();
    }
  }
}
