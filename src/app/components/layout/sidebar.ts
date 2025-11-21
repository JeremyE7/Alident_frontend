/**
 * Sidebar Component
 */

import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  solarDashboardOutline,
  solarCalendarMonthOutline,
  solarReceiptLongOutline,
  solarUserOutline,
  solarSettingsOutline,
  solarLogoutOutline,
} from '@ng-icons/solar-icons';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, NgIconComponent],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
  providers: [
    provideIcons({
      solarDashboardOutline,
      solarCalendarMonthOutline,
      solarReceiptLongOutline,
      solarUserOutline,
      solarSettingsOutline,
      solarLogoutOutline,
    }),
  ],
})
export class SidebarComponent {
  @Input() isOpen = true;
  private authService = inject(AuthService);
  public currentUser: User | null = this.authService.user();
}
