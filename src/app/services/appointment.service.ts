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

  /**
   * Get available appointment slots for a given date
   */
  getAvailableSlots(date: Date): Observable<string[]> {
    // In a real application, this would make an API call.
    // For now, it returns a mock list of slots.
    const mockSlots = ["09:00 AM", "09:30 AM", "10:30 AM", "11:00 AM", "01:00 PM", "01:30 PM", "02:30 PM", "03:00 PM"];
    return new Observable(observer => {
      observer.next(mockSlots);
      observer.complete();
    });
  }
}
