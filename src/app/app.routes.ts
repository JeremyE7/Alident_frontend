import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing').then(m => m.LandingComponent)
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
    loadComponent: () => import('./features/appointments/appointments').then(m => m.AppointmentsComponent)
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
    loadComponent: () => import('./features/payment-history/payment-history').then(m => m.PaymentHistoryComponent)
  },
  {
    path: 'inventory',
    loadComponent: () => import('./features/dashboard/dashboard').then(m => m.DashboardComponent) // Placeholder
  }
];
