/**
 * Patient Service
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../config/app.config.constants';
import { 
  Patient, 
  PatientCreateDto, 
  PatientUpdateDto, 
  PatientStatus 
} from '../models/patient.model';
import { PaginatedResponse, QueryParams } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiService = inject(ApiService);
  private endpoint = APP_CONFIG.api.endpoints.patients;

  /**
   * Get all patients with pagination and filters
   */
  getPatients(page = 1, limit = 50, status?: PatientStatus): Observable<PaginatedResponse<Patient>> {
    const params: QueryParams = { page, limit };
    if (status) {
      params['status'] = status;
    }
    return this.apiService.getPaginated<Patient>(this.endpoint, params);
  }

  /**
   * Get patient by ID
   */
  getPatient(id: number): Observable<Patient> {
    return this.apiService.getById<Patient>(this.endpoint, id);
  }

  /**
   * Search patients
   */
  searchPatients(query: string): Observable<Patient[]> {
    return this.apiService.get<Patient[]>(`${this.endpoint}/search`, { q: query });
  }

  /**
   * Create new patient
   */
  createPatient(patient: PatientCreateDto): Observable<Patient> {
    return this.apiService.post<Patient>(this.endpoint, patient);
  }

  /**
   * Update patient
   */
  updatePatient(id: number, patient: PatientUpdateDto): Observable<Patient> {
    return this.apiService.patch<Patient>(this.endpoint, id, patient);
  }

  /**
   * Delete patient
   */
  deletePatient(id: number): Observable<void> {
    return this.apiService.delete<void>(this.endpoint, id);
  }
}
