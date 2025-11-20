/**
 * Payment Model
 */

export type PaymentMethod = 
  | 'cash' 
  | 'debit_card' 
  | 'credit_card' 
  | 'transfer' 
  | 'financing_internal' 
  | 'financing_external' 
  | 'insurance' 
  | 'mixed';

export type PaymentConcept = 'advance' | 'installment' | 'final_balance';
export type PaymentStatus = 'completed' | 'pending' | 'reversed';

export interface Payment {
  id: number;
  patientId: number;
  paymentDate: string;
  amount: number;
  paymentMethod: PaymentMethod;
  reference?: string;
  concept: PaymentConcept;
  relatedTreatment?: string;
  receiptNumber?: string;
  status: PaymentStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentCreateDto {
  patientId: number;
  paymentDate: string;
  amount: number;
  paymentMethod: PaymentMethod;
  reference?: string;
  concept: PaymentConcept;
  relatedTreatment?: string;
  receiptNumber?: string;
  notes?: string;
}

export interface PaymentUpdateDto {
  amount?: number;
  paymentMethod?: PaymentMethod;
  reference?: string;
  concept?: PaymentConcept;
  relatedTreatment?: string;
  receiptNumber?: string;
  status?: PaymentStatus;
  notes?: string;
}
