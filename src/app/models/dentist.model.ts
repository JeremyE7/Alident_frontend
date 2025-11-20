/**
 * Dentist Model
 */

export type DentistStatus = 'active' | 'inactive' | 'vacation';
export type ContractType = 'fixed' | 'part_time' | 'contractor' | 'temporary';

export interface Dentist {
  id: number;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  licenseNumber: string;
  specialties?: string[]; // JSON array
  yearsOfExperience?: number;
  education?: string;
  certifications?: string[]; // JSON array
  professionalAssociations?: string;
  hireDate: string;
  contractType: ContractType;
  baseSalary?: number;
  commissionPercentage?: number;
  productivityBonus?: number;
  status: DentistStatus;
  emergencyContactName?: string;
  emergencyPhone?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DentistCreateDto {
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  address?: string;
  city?: string;
  licenseNumber: string;
  specialties?: string; // JSON string
  yearsOfExperience?: number;
  education?: string;
  certifications?: string; // JSON string
  professionalAssociations?: string;
  hireDate: string;
  contractType: ContractType;
  baseSalary?: number;
  commissionPercentage?: number;
  productivityBonus?: number;
  emergencyContactName?: string;
  emergencyPhone?: string;
  notes?: string;
}

export interface DentistUpdateDto {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  specialties?: string;
  yearsOfExperience?: number;
  education?: string;
  certifications?: string;
  professionalAssociations?: string;
  contractType?: ContractType;
  baseSalary?: number;
  commissionPercentage?: number;
  productivityBonus?: number;
  status?: DentistStatus;
  emergencyContactName?: string;
  emergencyPhone?: string;
  notes?: string;
}
