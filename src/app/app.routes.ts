import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'patients',
    loadComponent: () => import('./features/patients/patient-list').then(m => m.PatientListComponent)
  },
  {
    path: 'dentists',
    loadComponent: () => import('./features/dentists/dentist-list').then(m => m.DentistListComponent)
  },
  {
    path: 'appointments',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) // Placeholder
  },
  {
    path: 'treatments',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) // Placeholder
  },
  {
    path: 'clinical-histories',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) // Placeholder
  },
  {
    path: 'payments',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) // Placeholder
  },
  {
    path: 'inventory',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) // Placeholder
  }
];
