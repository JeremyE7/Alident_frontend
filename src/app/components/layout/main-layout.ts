/**
 * Main Layout Component
 */

import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header';
import { SidebarComponent } from './sidebar';
import gsap from 'gsap';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayoutComponent implements OnInit {
  protected sidebarOpen = signal(true);

  ngOnInit(): void {
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
