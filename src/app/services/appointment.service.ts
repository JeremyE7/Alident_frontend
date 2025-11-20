/**
 * Appointment Service
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../config/app.config.constants';
import { 
  Appointment, 
  AppointmentCreateDto, 
  AppointmentUpdateDto,
  AppointmentFilters
} from '../models/appointment.model';
import { PaginatedResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiService = inject(ApiService);
  private endpoint = APP_CONFIG.api.endpoints.appointments;

  /**
   * Get all appointments with filters
   */
  getAppointments(filters?: AppointmentFilters): Observable<PaginatedResponse<Appointment>> {
    return this.apiService.getPaginated<Appointment>(this.endpoint, filters);
  }

  /**
   * Get appointment by ID
   */
  getAppointment(id: number): Observable<Appointment> {
    return this.apiService.getById<Appointment>(this.endpoint, id);
  }

  /**
   * Create new appointment
   */
  createAppointment(appointment: AppointmentCreateDto): Observable<Appointment> {
    return this.apiService.post<Appointment>(this.endpoint, appointment);
  }

  /**
   * Update appointment
   */
  updateAppointment(id: number, appointment: AppointmentUpdateDto): Observable<Appointment> {
    return this.apiService.patch<Appointment>(this.endpoint, id, appointment);
  }

  /**
   * Delete appointment
   */
  deleteAppointment(id: number): Observable<void> {
    return this.apiService.delete<void>(this.endpoint, id);
  }
}
