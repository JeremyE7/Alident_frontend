/**
 * Patient Model
 */

export type PatientStatus = 'active' | 'inactive' | 'archived';
export type Gender = 'male' | 'female' | 'other';
export type DocumentType = 'DNI' | 'Passport' | 'NIE' | 'Other';
export type BloodType = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type ReferralSource = 'walk_in' | 'referral' | 'online' | 'insurance' | 'other';

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  dateOfBirth: string; // ISO date
  age?: number;
  gender: Gender;
  primaryPhone: string;
  secondaryPhone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  emergencyContactName?: string;
  emergencyPhone?: string;
  occupation?: string;
  bloodType?: BloodType;
  allergies?: string[]; // JSON array
  chronicDiseases?: string[]; // JSON array
  currentMedications?: string[]; // JSON array
  previousDentalTreatments?: string;
  isPregnant?: boolean;
  gestationalWeeks?: number;
  gdprConsent: boolean;
  marketingConsent?: boolean;
  photoConsent?: boolean;
  status: PatientStatus;
  referralSource?: ReferralSource;
  referralDetails?: string;
  language?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PatientCreateDto {
  firstName: string;
  lastName: string;
  documentType: DocumentType;
  documentNumber: string;
  dateOfBirth: string;
  gender: Gender;
  primaryPhone: string;
  secondaryPhone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  emergencyContactName?: string;
  emergencyPhone?: string;
  occupation?: string;
  bloodType?: BloodType;
  allergies?: string; // JSON string
  chronicDiseases?: string; // JSON string
  currentMedications?: string; // JSON string
  previousDentalTreatments?: string;
  isPregnant?: boolean;
  gestationalWeeks?: number;
  gdprConsent: boolean;
  marketingConsent?: boolean;
  photoConsent?: boolean;
  referralSource?: ReferralSource;
  referralDetails?: string;
  language?: string;
}

export interface PatientUpdateDto {
  firstName?: string;
  lastName?: string;
  primaryPhone?: string;
  secondaryPhone?: string;
  email?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  emergencyContactName?: string;
  emergencyPhone?: string;
  occupation?: string;
  bloodType?: BloodType;
  allergies?: string;
  chronicDiseases?: string;
  currentMedications?: string;
  previousDentalTreatments?: string;
  isPregnant?: boolean;
  gestationalWeeks?: number;
  marketingConsent?: boolean;
  photoConsent?: boolean;
  status?: PatientStatus;
  referralDetails?: string;
  language?: string;
}
