import { Component, OnInit, OnDestroy } from '@angular/core';

   @Component({
    selector: 'app-cursor-animation',
    templateUrl: '../rotatingwords/rotatingwords.html',
    styleUrl: '../rotatingwords/rotatingwords.scss',
    standalone: true
   })
   export class CursorAnimationComponent implements OnInit, OnDestroy {
      words: string[] = ['INSPIRE', 'CREATE', 'INNOVATE'];
      displayedText: string = '';
      private wordIndex: number = 0;
      private charIndex: number = 0;
      private isDeleting: boolean = false;
      private typingInterval: any;

      ngOnInit(): void {
        this.type();
      }

      ngOnDestroy(): void {
        if (this.typingInterval) {
          clearTimeout(this.typingInterval);
        }
      }

      private type(): void {
        const currentWord = this.words[this.wordIndex];
        if (this.isDeleting) {
          this.displayedText = currentWord.substring(0, this.charIndex--);
          if (this.charIndex < 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            this.typingInterval = setTimeout(() => this.type(), 500);
          } else {
            this.typingInterval = setTimeout(() => this.type(), 100);
          }
        } else {
          this.displayedText = currentWord.substring(0, this.charIndex++);
          if (this.charIndex > currentWord.length) {
            this.isDeleting = true;
            this.typingInterval = setTimeout(() => this.type(), 1000);
          } else {
            this.typingInterval = setTimeout(() => this.type(), 200);
          }
        }
      }
    }