/**
 * Custom Card Component
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() shadow: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() hoverable = false;

  get classes(): string {
    const baseClasses = 'card';
    const paddingClass = `card-padding-${this.padding}`;
    const shadowClass = `card-shadow-${this.shadow}`;
    const hoverClass = this.hoverable ? 'card-hoverable' : '';
    
    return `${baseClasses} ${paddingClass} ${shadowClass} ${hoverClass}`.trim();
  }
}
