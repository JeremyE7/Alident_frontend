/**
 * Common Models and Interfaces
 */

export interface PaginationMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface HealthCheck {
  status: string;
  timestamp: string;
  environment: string;
}

export interface QueryParams {
  page?: number;
  limit?: number;
  [key: string]: any;
}
