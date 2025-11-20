/**
 * Application Configuration - Parametrizable Settings
 * 
 * This file contains all the parametrizable settings for the application
 * including branding, API configuration, and general settings.
 */

export const APP_CONFIG = {
  // Branding
  branding: {
    appName: 'Alident',
    appFullName: 'Sistema de Gestión Odontológica Alident',
    appDescription: 'Sistema integral de gestión para clínicas dentales',
    companyName: 'Alident',
    version: '1.0.0',
    logo: {
      main: '/assets/logo.svg',
      icon: '/assets/icon.svg',
      small: '/assets/logo-sm.svg'
    }
  },

  // API Configuration
  api: {
    baseUrl: 'http://localhost:3000/api',
    timeout: 30000, // 30 seconds
    endpoints: {
      health: '/health',
      patients: '/patients',
      dentists: '/dentists',
      appointments: '/appointments',
      treatments: '/treatments',
      odontograms: '/odontograms',
      clinicalHistories: '/clinical-histories',
      payments: '/payments',
      inventory: '/inventory',
      insurance: '/insurance'
    }
  },

  // Pagination
  pagination: {
    defaultPage: 1,
    defaultLimit: 50,
    limitOptions: [10, 25, 50, 100]
  },

  // Date & Time
  dateTime: {
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm',
    dateTimeFormat: 'DD/MM/YYYY HH:mm',
    locale: 'es'
  },

  // UI Settings
  ui: {
    sidebarWidth: 280,
    headerHeight: 64,
    animationDuration: 300, // ms
    toastDuration: 5000 // ms
  }
} as const;

// Type exports for better type safety
export type AppConfig = typeof APP_CONFIG;
export type BrandingConfig = typeof APP_CONFIG.branding;
export type ApiConfig = typeof APP_CONFIG.api;
