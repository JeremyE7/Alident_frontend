/**
 * Dentist Service
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../config/app.config.constants';
import { 
  Dentist, 
  DentistCreateDto, 
  DentistUpdateDto, 
  DentistStatus 
} from '../models/dentist.model';
import { PaginatedResponse, QueryParams } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class DentistService {
  private apiService = inject(ApiService);
  private endpoint = APP_CONFIG.api.endpoints.dentists;

  /**
   * Get all dentists with filters
   */
  getDentists(status?: DentistStatus): Observable<PaginatedResponse<Dentist>> {
    const params: QueryParams = {};
    if (status) {
      params['status'] = status;
    }
    return this.apiService.getPaginated<Dentist>(this.endpoint, params);
  }

  /**
   * Get dentist by ID
   */
  getDentist(id: number): Observable<Dentist> {
    return this.apiService.getById<Dentist>(this.endpoint, id);
  }

  /**
   * Create new dentist
   */
  createDentist(dentist: DentistCreateDto): Observable<Dentist> {
    return this.apiService.post<Dentist>(this.endpoint, dentist);
  }

  /**
   * Update dentist
   */
  updateDentist(id: number, dentist: DentistUpdateDto): Observable<Dentist> {
    return this.apiService.patch<Dentist>(this.endpoint, id, dentist);
  }

  /**
   * Delete dentist
   */
  deleteDentist(id: number): Observable<void> {
    return this.apiService.delete<void>(this.endpoint, id);
  }
}
