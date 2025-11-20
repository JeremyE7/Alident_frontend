/**
 * Dentist List Component
 */

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

import { DentistService } from '../../services/dentist.service';
import { Dentist, DentistStatus } from '../../models/dentist.model';
import { CardComponent } from '../../components/shared/card';
import { ButtonComponent } from '../../components/shared/button';

@Component({
  selector: 'app-dentist-list',
  imports: [CommonModule, RouterModule, CardComponent, ButtonComponent],
  templateUrl: './dentist-list.html',
  styleUrl: './dentist-list.css'
})
export class DentistListComponent implements OnInit {
  private dentistService = inject(DentistService);

  protected dentists = signal<Dentist[]>([]);
  protected loading = signal(false);
  protected error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadDentists();
  }

  loadDentists(): void {
    this.loading.set(true);
    this.error.set(null);

    this.dentistService.getDentists().subscribe({
      next: (response) => {
        this.dentists.set(response.data);
        this.loading.set(false);
        this.animateDentistCards();
      },
      error: (err) => {
        this.error.set('Error al cargar los odontólogos');
        this.loading.set(false);
        console.error('Error loading dentists:', err);
      }
    });
  }

  private animateDentistCards(): void {
    setTimeout(() => {
      gsap.from('.dentist-card', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out'
      });
    }, 0);
  }

  getStatusBadgeClass(status: DentistStatus): string {
    const classes: Record<DentistStatus, string> = {
      active: 'status-badge-active',
      inactive: 'status-badge-inactive',
      vacation: 'status-badge-vacation'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: DentistStatus): string {
    const labels: Record<DentistStatus, string> = {
      active: 'Activo',
      inactive: 'Inactivo',
      vacation: 'Vacaciones'
    };
    return labels[status] || status;
  }
}
