/**
 * Treatment Model
 */

export type TreatmentCategory = 
  | 'preventive' 
  | 'restorative' 
  | 'surgical' 
  | 'orthodontics' 
  | 'aesthetic' 
  | 'prosthetics' 
  | 'periodontics' 
  | 'pediatric';

export interface Treatment {
  id: number;
  code: string;
  name: string;
  description?: string;
  category: TreatmentCategory;
  estimatedDuration: number; // minutes
  basePrice: number;
  promotionalPrice?: number;
  supplyCost?: number;
  requiredSpecialty?: string;
  requiredEquipment?: string[]; // JSON array
  typicalSessions: number;
  supplies?: any[]; // JSON array
  contraindications?: string;
  postTreatmentCare?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TreatmentCreateDto {
  code: string;
  name: string;
  description?: string;
  category: TreatmentCategory;
  estimatedDuration: number;
  basePrice: number;
  promotionalPrice?: number;
  supplyCost?: number;
  requiredSpecialty?: string;
  requiredEquipment?: string; // JSON string
  typicalSessions: number;
  supplies?: string; // JSON string
  contraindications?: string;
  postTreatmentCare?: string;
  isActive?: boolean;
}

export interface TreatmentUpdateDto {
  code?: string;
  name?: string;
  description?: string;
  category?: TreatmentCategory;
  estimatedDuration?: number;
  basePrice?: number;
  promotionalPrice?: number;
  supplyCost?: number;
  requiredSpecialty?: string;
  requiredEquipment?: string;
  typicalSessions?: number;
  supplies?: string;
  contraindications?: string;
  postTreatmentCare?: string;
  isActive?: boolean;
}

export interface TreatmentFilters {
  category?: TreatmentCategory;
  isActive?: boolean;
  page?: number;
  limit?: number;
}
