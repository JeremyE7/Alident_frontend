/**
 * Main Layout Component
 */

import { Component, signal, OnInit, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header';
import { SidebarComponent } from './sidebar';
import gsap from 'gsap';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayoutComponent implements OnInit {
  protected sidebarOpen = signal(true);
  protected showLayout = signal(true);
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showLayout.set(event.urlAfterRedirects !== '/');
    });

    // Initial animation
    gsap.from('.main-layout', {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(value => !value);
  }
}
