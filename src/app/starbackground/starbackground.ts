import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-star-field',
  standalone: true,
  templateUrl: './starbackground.html',
  styleUrls: ['./starbackground.scss'],
})
export class StarFieldComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { static: true }) containerRef!: ElementRef<HTMLDivElement>;

  /** Dot (star) diameter in px */
  @Input() dotSize = 4;

  /** Edge-to-edge gap between dots in px (centers will be dotSize + gap) */
  @Input() gap = 40;

  /** Optional: min & max animation durations (seconds) for twinkle */
  @Input() minDuration = 1.2;
  @Input() maxDuration = 2.5;

  /** Optional: max random animation delay (seconds) */
  @Input() maxDelay = 2;

  private resizeTimer: any = null;

  constructor(private renderer: Renderer2, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.buildGrid();
  }

  ngOnDestroy(): void {
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
  }

  @HostListener('window:resize')
  onResize() {
    // Debounce rebuild to avoid thrashing
    if (this.resizeTimer) {
      clearTimeout(this.resizeTimer);
    }
    this.resizeTimer = setTimeout(() => this.buildGrid(), 120);
  }

  private buildGrid(): void {
    const container = this.containerRef.nativeElement;

    // Clear existing stars
    container.innerHTML = '';

    const width = container.clientWidth;
    const height = container.clientHeight;
    const spacing = this.dotSize + this.gap;

    // Build outside Angular for smoother perf (no change detection churn)
    this.zone.runOutsideAngular(() => {
      const fragment = document.createDocumentFragment();

      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          const star = this.renderer.createElement('div') as HTMLDivElement;
          this.renderer.addClass(star, 'star');

          // Base size & position
          this.renderer.setStyle(star, 'width', `${this.dotSize}px`);
          this.renderer.setStyle(star, 'height', `${this.dotSize}px`);
          this.renderer.setStyle(star, 'left', `${x}px`);
          this.renderer.setStyle(star, 'top', `${y}px`);

          // Randomized animation duration and delay for a natural twinkle
          const duration =
            this.minDuration + Math.random() * Math.max(0, this.maxDuration - this.minDuration);
          const delay = Math.random() * this.maxDelay;

          this.renderer.setStyle(star, 'animationDuration', `${duration}s`);
          this.renderer.setStyle(star, 'animationDelay', `${delay}s`);

          fragment.appendChild(star);
        }
      }

      container.appendChild(fragment);
    });
  }
}
