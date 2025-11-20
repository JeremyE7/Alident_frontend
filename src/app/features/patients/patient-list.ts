/**
 * Patient List Component
 */

import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import gsap from 'gsap';

import { PatientService } from '../../services/patient.service';
import { Patient, PatientStatus } from '../../models/patient.model';
import { PaginationMeta } from '../../models/common.model';
import { CardComponent } from '../../components/shared/card';
import { ButtonComponent } from '../../components/shared/button';

@Component({
  selector: 'app-patient-list',
  imports: [CommonModule, FormsModule, RouterModule, CardComponent, ButtonComponent],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css'
})
export class PatientListComponent implements OnInit {
  private patientService = inject(PatientService);

  protected patients = signal<Patient[]>([]);
  protected loading = signal(false);
  protected error = signal<string | null>(null);
  
  protected searchQuery = signal('');
  protected statusFilter = signal<PatientStatus | 'all'>('all');
  protected currentPage = signal(1);
  protected pageSize = signal(50);
  protected meta = signal<PaginationMeta | null>(null);
  
  protected readonly Math = Math;

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.loading.set(true);
    this.error.set(null);

    const status = this.statusFilter() !== 'all' ? this.statusFilter() as PatientStatus : undefined;

    this.patientService
      .getPatients(this.currentPage(), this.pageSize(), status)
      .subscribe({
        next: (response) => {
          this.patients.set(response.data);
          this.meta.set(response.meta);
          this.loading.set(false);
          this.animatePatientCards();
        },
        error: (err) => {
          this.error.set('Error al cargar los pacientes');
          this.loading.set(false);
          console.error('Error loading patients:', err);
        }
      });
  }

  onSearch(): void {
    const query = this.searchQuery();
    if (query.trim()) {
      this.loading.set(true);
      this.patientService.searchPatients(query).subscribe({
        next: (patients) => {
          this.patients.set(patients);
          this.meta.set(null);
          this.loading.set(false);
          this.animatePatientCards();
        },
        error: (err) => {
          this.error.set('Error en la búsqueda');
          this.loading.set(false);
          console.error('Error searching patients:', err);
        }
      });
    } else {
      this.loadPatients();
    }
  }

  onStatusFilterChange(): void {
    this.currentPage.set(1);
    this.loadPatients();
  }

  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.loadPatients();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private animatePatientCards(): void {
    setTimeout(() => {
      gsap.from('.patient-card', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.out'
      });
    }, 0);
  }

  getAge(dateOfBirth: string): number {
    const today = new Date();
    const birth = new Date(dateOfBirth);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age;
  }

  getStatusBadgeClass(status: PatientStatus): string {
    const classes: Record<PatientStatus, string> = {
      active: 'status-badge-active',
      inactive: 'status-badge-inactive',
      archived: 'status-badge-archived'
    };
    return classes[status] || '';
  }

  getStatusLabel(status: PatientStatus): string {
    const labels: Record<PatientStatus, string> = {
      active: 'Activo',
      inactive: 'Inactivo',
      archived: 'Archivado'
    };
    return labels[status] || status;
  }
}
