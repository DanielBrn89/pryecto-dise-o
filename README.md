# Tarea: Implementación de Diseño Responsivo en React

Este proyecto implementa un diseño responsivo utilizando React, TypeScript y Bootstrap, siguiendo las especificaciones de la tarea.

![Diseño responsivo en diferentes dispositivos](screenshots/responsive-preview.png)

## Características principales
- Menú hamburguesa para dispositivos móviles
- Layout adaptable a 3 tamaños de pantalla
- Tarjetas que cambian de columnas según el dispositivo
- Tipografía y espaciado responsivo

## Capturas de pantalla

| Vista Móvil (<600px) | Vista Tableta (768px) | Vista Escritorio (1024px) |
|----------------------|-----------------------|---------------------------|
| ![Mobile](screenshots/mobile.png) | ![Tablet](screenshots/tablet.png) | ![Desktop](screenshots/desktop.png) |

## Enfoque de diseño responsivo

### Framework utilizado
- **Bootstrap 5**: Se utilizó el sistema de grillas y componentes responsivos de Bootstrap

### Comportamiento por dispositivo
- **Móviles (≤600px)**:
  - Menú de navegación colapsado (hamburguesa)
  - Tarjetas en una sola columna
  - Fuentes más grandes para mejor legibilidad
  - Espaciado optimizado para pantallas pequeñas
  
- **Tabletas (601px - 1024px)**:
  - Tarjetas en dos columnas
  - Espaciado entre tarjetas aumentado
  - Tamaño de texto ajustado para visualización óptima
  
- **Escritorio (>1024px)**:
  - Tarjetas en tres columnas
  - Diseño optimizado para pantallas grandes
  - Proporciones y espaciado mejorados

### Técnicas implementadas
- Sistema de grillas responsivas con breakpoints específicos
- Componentes que se transforman según el tamaño de pantalla
- Diseño mobile-first
- Media queries de Bootstrap para ajustes específicos
- Tipografía escalable con unidades relativas

## Despliegue

https://pryecto-dise-o.vercel.app/

## Instalación local

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git