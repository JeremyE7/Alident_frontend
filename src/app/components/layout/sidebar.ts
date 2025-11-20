/**
 * Sidebar Component
 */

import { Component, Input, OnChanges, SimpleChanges, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent implements OnChanges, AfterViewInit {
  @Input() isOpen = true;
  
  private elementRef = inject(ElementRef);
  
  protected navItems: NavItem[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      label: 'Pacientes',
      icon: 'patients',
      route: '/patients'
    },
    {
      label: 'Odontólogos',
      icon: 'dentists',
      route: '/dentists'
    },
    {
      label: 'Citas',
      icon: 'appointments',
      route: '/appointments'
    },
    {
      label: 'Tratamientos',
      icon: 'treatments',
      route: '/treatments'
    },
    {
      label: 'Historia Clínica',
      icon: 'clinical',
      route: '/clinical-histories'
    },
    {
      label: 'Pagos',
      icon: 'payments',
      route: '/payments'
    },
    {
      label: 'Inventario',
      icon: 'inventory',
      route: '/inventory'
    }
  ];

  ngAfterViewInit(): void {
    // Initial animation for nav items
    gsap.from('.nav-item', {
      x: -20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.05,
      ease: 'power2.out'
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen'] && !changes['isOpen'].firstChange) {
      this.animateSidebar();
    }
  }

  private animateSidebar(): void {
    const sidebar = this.elementRef.nativeElement.querySelector('.sidebar');
    
    if (this.isOpen) {
      gsap.to(sidebar, {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(sidebar, {
        x: -280,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }

  getIcon(iconName: string): string {
    const icons: Record<string, string> = {
      dashboard: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      patients: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      dentists: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      appointments: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      treatments: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      clinical: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      payments: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
      inventory: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
    };
    
    return icons[iconName] || '';
  }
}
