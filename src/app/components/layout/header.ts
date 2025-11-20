/**
 * Header Component
 */

import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_CONFIG } from '../../config/app.config.constants';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  protected readonly appName = APP_CONFIG.branding.appName;
  protected readonly appFullName = APP_CONFIG.branding.appFullName;

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
