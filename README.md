# Alident Frontend

Sistema de Gestión Odontológica construido con Angular 21, diseñado para clínicas dentales modernas.

## 🚀 Características

- ✨ **Angular 21** con sintaxis moderna (@if, @for)
- 🎨 **Tailwind CSS 4** con paleta de colores personalizable
- 🎬 **GSAP** para animaciones suaves y creativas
- 📱 **Diseño Responsive** optimizado para móviles y tablets
- ⚡ **Lazy Loading** para carga rápida de módulos
- 🔧 **Totalmente Parametrizable** (colores, logos, nombres)
- 🌐 **API REST** integración completa con backend
- 📊 **Dashboard** con métricas en tiempo real

## 🛠️ Tecnologías

- **Angular**: 21.0.0
- **TypeScript**: 5.9.2
- **Tailwind CSS**: 4.0.0-alpha
- **GSAP**: 3.12+
- **RxJS**: 7.8.0
- **Node.js**: 20.19.5

## 📋 Módulos Implementados

### ✅ Completados
- 🏥 Dashboard con estadísticas
- 👥 Gestión de Pacientes (lista con paginación, búsqueda y filtros)
- 👨‍⚕️ Gestión de Odontólogos
- 🎨 Componentes UI personalizados (botones, cards, layout)
- 🎭 Animaciones GSAP integradas

### 🔄 En Desarrollo
- 📅 Gestión de Citas (calendario y lista)
- 🦷 Catálogo de Tratamientos
- 📋 Historias Clínicas
- 💰 Sistema de Pagos
- 📦 Inventario
- 🛡️ Seguros

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm start
```
Servidor de desarrollo en `http://localhost:4200/`

### Build de Producción
```bash
npm run build
```
Los archivos se generan en `dist/alident-frontend/`

### Tests
```bash
npm test
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── layout/         # Header, Sidebar, MainLayout
│   │   └── shared/         # Button, Card, etc.
│   ├── config/             # Configuración parametrizable
│   ├── features/           # Módulos funcionales
│   │   ├── dashboard/
│   │   ├── patients/
│   │   ├── dentists/
│   │   └── ...
│   ├── models/             # Interfaces TypeScript
│   ├── services/           # Servicios HTTP
│   ├── app.config.ts       # Configuración de Angular
│   ├── app.routes.ts       # Definición de rutas
│   └── app.ts             # Componente raíz
├── styles.css              # Estilos globales + Tailwind
└── main.ts                 # Bootstrap de la aplicación
```

## 🎨 Personalización

El sistema está diseñado para ser completamente personalizable. Ver [CUSTOMIZATION.md](./CUSTOMIZATION.md) para una guía detallada.

### Cambio Rápido de Branding

1. **Nombre del sistema**: Edita `src/app/config/app.config.constants.ts`
2. **Colores**: Modifica las variables CSS en `src/styles.css`
3. **Logos**: Coloca tus archivos en `public/assets/` y actualiza las rutas

## 🌐 Conexión con Backend

La API base está configurada en `src/app/config/app.config.constants.ts`:

```typescript
api: {
  baseUrl: 'http://localhost:3000/api',
  // ...
}
```

Ver la documentación de la API en el archivo de requisitos para endpoints disponibles.

## 📱 Componentes Clave

### Componentes Shared
- `ButtonComponent`: Botón personalizable con variantes y estados
- `CardComponent`: Contenedor con título, subtítulo y sombras

### Features
- `DashboardComponent`: Panel de control principal
- `PatientListComponent`: Lista de pacientes con búsqueda/filtros
- `DentistListComponent`: Gestión de odontólogos

## 🎬 Animaciones GSAP

Todas las vistas principales incluyen animaciones suaves:
- Fade-in de tarjetas con efecto stagger
- Transiciones de navegación
- Efectos hover personalizados

## 🔒 Consideraciones de Seguridad

- ✅ HttpClient configurado para llamadas HTTP seguras
- 🔄 Interceptores preparados para JWT (pendiente implementación)
- 🛡️ Validación de datos en formularios

## 📊 Rendimiento

- ⚡ Lazy loading de módulos
- 🗜️ Optimización de bundles
- 📦 Tree-shaking automático
- 🎯 Code splitting por rutas

## 🧪 Testing

```bash
npm test              # Ejecutar tests
npm run test:watch   # Modo watch
```

## 🚢 Despliegue

### Build de Producción
```bash
npm run build
```

### Servidor de Archivos Estáticos
Los archivos en `dist/alident-frontend/` pueden servirse con cualquier servidor web:
- Nginx
- Apache
- Vercel
- Netlify
- Firebase Hosting

## 📝 Convenciones de Código

- **Componentes**: 3 archivos (.ts, .html, .css)
- **Sintaxis**: Control flow moderno (@if, @for)
- **Signals**: Para estado reactivo
- **Inject**: Inyección de dependencias funcional
- **Standalone**: Todos los componentes son standalone

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT.

## 🆘 Soporte

Para preguntas y soporte:
- Documentación: Ver [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- Issues: Crear un issue en GitHub
- Angular Docs: https://angular.dev
