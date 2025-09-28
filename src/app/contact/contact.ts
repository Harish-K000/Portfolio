import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'contact',
    templateUrl: '..//contact/contact.html',
    styleUrl: '..//contact/contact.scss',
    standalone: true,
    imports: [CommonModule, FormsModule]
})
export class contact {
    email = 'asureshk@buffalo.edu';
    subject = 'Portfolio Inquiry';
    message = '';

    sendMessage(): void {
        const trimmedMessage = this.message.trim();
        if (!trimmedMessage) {
            return;
        }

        // Guard against server-side rendering environments
        if (typeof window !== 'undefined') {
            const mailto = `mailto:${this.email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(trimmedMessage)}`;
            window.location.href = mailto;
        }
    }
}
