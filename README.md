# Alident Frontend

Frontend para el sistema de Alident construido con Angular 21.

## Tecnologías

- **Angular**: 21.0.0
- **TypeScript**: 5.9.2
- **Node.js**: 20.19.5
- **Testing**: Vitest 4.0.8

## Comandos

### Desarrollo
```bash
npm start
```
Inicia el servidor de desarrollo en `http://localhost:4200/`

### Build
```bash
npm run build
```
Compila el proyecto para producción en la carpeta `dist/`

### Tests
```bash
npm test
```
Ejecuta las pruebas unitarias con Vitest

### Watch Mode (Build)
```bash
npm run watch
```
Compila el proyecto en modo desarrollo y observa cambios

## Estructura del Proyecto

```
src/
├── app/                 # Componentes de la aplicación
│   ├── app.ts          # Componente principal
│   ├── app.config.ts   # Configuración de la aplicación
│   ├── app.routes.ts   # Rutas de la aplicación
│   └── ...
├── index.html          # HTML principal
├── main.ts             # Punto de entrada de la aplicación
└── styles.css          # Estilos globales
```

## Instalación

```bash
npm install
```
