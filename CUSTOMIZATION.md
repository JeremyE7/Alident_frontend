# Guía de Personalización - Sistema Alident

Este documento explica cómo personalizar el sistema para adaptarlo a tu clínica dental.

## 🎨 Personalización de Marca

### Cambiar el Nombre del Sistema

Edita el archivo `src/app/config/app.config.constants.ts`:

```typescript
export const APP_CONFIG = {
  branding: {
    appName: 'TuClinica',              // Nombre corto
    appFullName: 'Sistema de Gestión Odontológica TuClinica',
    appDescription: 'Tu descripción personalizada',
    companyName: 'TuClinica',
    version: '1.0.0',
    logo: {
      main: '/assets/logo.svg',
      icon: '/assets/icon.svg',
      small: '/assets/logo-sm.svg'
    }
  },
  // ...
}
```

### Cambiar los Colores del Sistema

Todos los colores se definen en `src/styles.css` usando variables CSS de Tailwind 4:

```css
@theme {
  /* Colores Primarios (Dorado) */
  --color-primary-50: #fef9e7;
  --color-primary-100: #fef3cf;
  /* ... modifica estos valores ... */
  --color-primary-900: #664d00;
  
  /* Colores Secundarios (Púrpura) */
  --color-secondary-50: #f5e6ff;
  /* ... modifica estos valores ... */
  --color-secondary-900: #13001a;
  
  /* Colores Neutrales */
  --color-neutral-50: #f7f7f7;
  /* ... modifica estos valores ... */
  --color-neutral-900: #1a1a1a;
}
```

#### Paleta de Colores Original

**Color Primario (Dorado):**
- Chinese Gold: `#CC9900`
- American Gold: `#D3AF37`
- Dutch White: `#EDE5B7`

**Color Secundario (Púrpura/Índigo):**
- Indigo: `#4B006E`

**Neutros:**
- Cultured: `#F7F7F7`

### Cambiar Logos

1. Coloca tus logos en la carpeta `public/assets/`
2. Actualiza las rutas en `src/app/config/app.config.constants.ts`

## 🔧 Configuración de API

Para conectar con tu backend, edita `src/app/config/app.config.constants.ts`:

```typescript
export const APP_CONFIG = {
  // ...
  api: {
    baseUrl: 'https://tu-api.com/api',  // Cambia esta URL
    timeout: 30000,
    endpoints: {
      health: '/health',
      patients: '/patients',
      // ... los demás endpoints ...
    }
  }
}
```

## 📱 Personalización de Espaciados y Bordes

En `src/styles.css`, puedes modificar:

```css
@theme {
  /* Espaciados */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;

  /* Bordes Redondeados */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-full: 9999px;

  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
}
```

## 🎯 Paginación y Límites

En `src/app/config/app.config.constants.ts`:

```typescript
export const APP_CONFIG = {
  // ...
  pagination: {
    defaultPage: 1,
    defaultLimit: 50,
    limitOptions: [10, 25, 50, 100]  // Opciones del selector
  }
}
```

## 🌐 Formato de Fechas e Idioma

```typescript
export const APP_CONFIG = {
  // ...
  dateTime: {
    dateFormat: 'DD/MM/YYYY',      // Cambia el formato
    timeFormat: 'HH:mm',
    dateTimeFormat: 'DD/MM/YYYY HH:mm',
    locale: 'es'                    // Cambia el idioma
  }
}
```

## 🎬 Animaciones GSAP

Todas las animaciones se pueden ajustar en:

```typescript
export const APP_CONFIG = {
  // ...
  ui: {
    sidebarWidth: 280,
    headerHeight: 64,
    animationDuration: 300,  // Duración en milisegundos
    toastDuration: 5000
  }
}
```

Para personalizar animaciones específicas, edita los componentes individuales. Por ejemplo, en `patient-list.ts`:

```typescript
private animatePatientCards(): void {
  gsap.from('.patient-card', {
    y: 20,              // Desplazamiento vertical
    opacity: 0,         // Opacidad inicial
    duration: 0.4,      // Duración
    stagger: 0.05,      // Retraso entre elementos
    ease: 'power2.out'  // Curva de animación
  });
}
```

## 📋 Archivos Clave de Configuración

| Archivo | Propósito |
|---------|-----------|
| `src/app/config/app.config.constants.ts` | Configuración general del sistema |
| `src/styles.css` | Colores, espaciados, y estilos globales |
| `public/assets/` | Logos e imágenes |

## 🚀 Despliegue

Después de personalizar, construye para producción:

```bash
npm run build
```

Los archivos estarán en `dist/alident-frontend/` listos para desplegar.

## 💡 Consejos

1. **Usa las variables CSS**: En lugar de hardcodear colores, usa `var(--color-primary-500)` en tus componentes
2. **Mantén la consistencia**: Al agregar nuevos componentes, sigue la estructura de 3 archivos (.ts, .html, .css)
3. **Prueba los cambios**: Ejecuta `npm run build` después de cada cambio importante
4. **Documenta tus cambios**: Si modificas valores, deja comentarios para futuros desarrolladores

## 🆘 Soporte

Si necesitas ayuda con la personalización, consulta:
- Documentación de Angular: https://angular.dev
- Documentación de Tailwind CSS: https://tailwindcss.com
- Documentación de GSAP: https://greensock.com/docs/
