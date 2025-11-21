/**
 * Header Component
 */

import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { solarNotificationBingOutline } from '@ng-icons/solar-icons';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, NgIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [
    provideIcons({
      solarNotificationBingOutline
    })
  ]
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  private authService = inject(AuthService);
  public currentUser: User | null = this.authService.user();

  onToggleSidebar(): void {
    this.toggleSidebar.emit();
  }
}
