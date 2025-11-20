/**
 * Dashboard Component
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/shared/card';
import gsap from 'gsap';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, CardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  protected stats = [
    { label: 'Pacientes Activos', value: '248', icon: 'users', color: 'primary' },
    { label: 'Citas Hoy', value: '12', icon: 'calendar', color: 'secondary' },
    { label: 'Tratamientos', value: '34', icon: 'clipboard', color: 'success' },
    { label: 'Ingresos Mes', value: '$8,450', icon: 'cash', color: 'warning' }
  ];

  ngOnInit(): void {
    this.animateStats();
  }

  private animateStats(): void {
    gsap.from('.stat-card', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    });
  }
}
