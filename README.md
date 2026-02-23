# Evidencia: Diseño y Desarrollo de Servicios Web - AA5-EV01

## 👤 Información del Aprendiz

- **Nombre:** Luis Orlando Guerra
- **Programa:** Análisis y Desarrollo de Software
- **Evidencia:** GA7-220501096-AA5-EV01

## 📝 Descripción del Proyecto

Este proyecto consiste en una **API REST** construida con **Node.js** y **Express** que implementa un sistema de autenticación robusto. La aplicación permite el registro de usuarios, el inicio de sesión y el acceso a rutas protegidas mediante el uso de estándares de seguridad modernos.

## 🛠️ Tecnologías y Requisitos Técnicos

Para cumplir con la plantilla de la evidencia, se implementaron las siguientes tecnologías:

- **Node.js**: Entorno de ejecución para el servidor.
- **Express**: Framework para la gestión de rutas y middleware.
- **MongoDB & Mongoose**: Base de datos NoSQL y modelado de datos de usuario.
- **Bcryptjs**: Implementación de seguridad para el **hasheo de contraseñas** (no se guardan en texto plano).
- **JSON Web Token (JWT)**: Generación de tokens firmados para la autorización de usuarios.
- **Dotenv**: Gestión de variables de entorno para proteger datos sensibles.

## 📂 Estructura del Proyecto

El proyecto sigue el patrón de diseño sugerido para una separación clara de responsabilidades:

- `src/config`: Configuración y conexión a la base de datos.
- `src/models`: Definición del esquema de usuario.
- `src/controllers`: Lógica de negocio para Registro y Login.
- `src/middlewares`: Validación de seguridad del token JWT.
- `src/routes`: Definición de los endpoints de la API.

## 🚀 Instrucciones de Instalación

1. Clonar o descargar el proyecto.
2. Abrir una terminal en la carpeta `/backend`.
3. Instalar las dependencias necesarias:
   ```bash
   npm install
   ```
