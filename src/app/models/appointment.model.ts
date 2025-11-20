/**
 * Appointment Model
 */

export type AppointmentStatus = 
  | 'scheduled' 
  | 'confirmed' 
  | 'in_progress' 
  | 'completed' 
  | 'cancelled' 
  | 'no_show';

export type AppointmentType = 
  | 'first_consultation' 
  | 'followup' 
  | 'treatment' 
  | 'emergency' 
  | 'control';

export interface Appointment {
  id: number;
  patientId: number;
  dentistId: number;
  officeId?: number;
  appointmentDate: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  duration: number; // minutes
  appointmentType: AppointmentType;
  status: AppointmentStatus;
  notes?: string;
  specialInstructions?: string;
  cancellationReason?: string;
  cancelledBy?: string;
  cancelledAt?: string;
  confirmedAt?: string;
  createdAt: string;
  updatedAt: string;
  // Relations populated in detailed view
  patient?: any;
  dentist?: any;
  office?: any;
}

export interface AppointmentCreateDto {
  patientId: number;
  dentistId: number;
  officeId?: number;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  duration: number;
  appointmentType: AppointmentType;
  notes?: string;
  specialInstructions?: string;
}

export interface AppointmentUpdateDto {
  dentistId?: number;
  officeId?: number;
  appointmentDate?: string;
  startTime?: string;
  endTime?: string;
  duration?: number;
  appointmentType?: AppointmentType;
  status?: AppointmentStatus;
  notes?: string;
  specialInstructions?: string;
  cancellationReason?: string;
  cancelledBy?: string;
}

export interface AppointmentFilters {
  startDate?: string;
  endDate?: string;
  dentistId?: number;
  patientId?: number;
  status?: AppointmentStatus;
  page?: number;
  limit?: number;
}
