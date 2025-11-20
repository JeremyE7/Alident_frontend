/**
 * Treatment Service
 */

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../config/app.config.constants';
import { 
  Treatment, 
  TreatmentCreateDto, 
  TreatmentUpdateDto,
  TreatmentFilters
} from '../models/treatment.model';
import { PaginatedResponse } from '../models/common.model';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {
  private apiService = inject(ApiService);
  private endpoint = APP_CONFIG.api.endpoints.treatments;

  /**
   * Get all treatments with filters
   */
  getTreatments(filters?: TreatmentFilters): Observable<PaginatedResponse<Treatment>> {
    return this.apiService.getPaginated<Treatment>(this.endpoint, filters);
  }

  /**
   * Get treatment by ID
   */
  getTreatment(id: number): Observable<Treatment> {
    return this.apiService.getById<Treatment>(this.endpoint, id);
  }

  /**
   * Create new treatment
   */
  createTreatment(treatment: TreatmentCreateDto): Observable<Treatment> {
    return this.apiService.post<Treatment>(this.endpoint, treatment);
  }

  /**
   * Update treatment
   */
  updateTreatment(id: number, treatment: TreatmentUpdateDto): Observable<Treatment> {
    return this.apiService.patch<Treatment>(this.endpoint, id, treatment);
  }

  /**
   * Delete treatment
   */
  deleteTreatment(id: number): Observable<void> {
    return this.apiService.delete<void>(this.endpoint, id);
  }
}
