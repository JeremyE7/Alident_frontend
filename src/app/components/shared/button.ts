/**
 * Custom Button Component
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  get classes(): string {
    const baseClasses = 'btn';
    const variantClass = `btn-${this.variant}`;
    const sizeClass = `btn-${this.size}`;
    const disabledClass = this.disabled || this.loading ? 'btn-disabled' : '';
    const fullWidthClass = this.fullWidth ? 'btn-full-width' : '';
    
    return `${baseClasses} ${variantClass} ${sizeClass} ${disabledClass} ${fullWidthClass}`.trim();
  }
}
