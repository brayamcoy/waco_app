# Waco Test API

Esta es la API para el proyecto Waco Test, desarrollada con Node.js, Express y TypeScript.

## Requisitos previos

Asegúrate de tener instalada la versión de Node.js v18.16.0. Puedes verificar la versión instalada ejecutando el siguiente comando en tu terminal: node --version


## Instalación

1. Clona este repositorio en tu máquina local:
git clone https://github.com/brayamcoy/waco_app.git


2. Navega hasta el directorio del proyecto: cd api


3. Instala las dependencias del proyecto utilizando npm: npm install


## Variables de entorno

El proyecto utiliza variables de entorno para configurar ciertos valores. Asegúrate de crear un archivo `.env` en la raíz del proyecto y define las siguientes variables de entorno en él siguiente ejemplo:


HOST=localhost
PORT=8000
MONGO_URI=mongodb://mongo:gPvS2yYQ03OvT3ukRSV8@containers-us-west-55.railway.app:6239
JWT_SECRET=WACO_SERVICES


Asegúrate de ajustar los valores de las variables según corresponda.

## Uso

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando: npm run dev

Esto iniciará el servidor en modo de desarrollo en la dirección `http://localhost:8000`.

## Scripts disponibles

En el proyecto, puedes ejecutar los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo utilizando nodemon para reiniciar automáticamente en caso de cambios.
- `npm run build`: Compila el código TypeScript en JavaScript en la carpeta `build`.
- `npm start`: Inicia el servidor en modo de producción utilizando el código compilado en la carpeta `build`.
- `npm test`: Ejecuta los tests de la aplicación.
- `npm run lint`: Ejecuta el linter para verificar el código.

## Dependencias principales

A continuación se muestra una lista de las dependencias principales utilizadas en el proyecto:

- `bcryptjs`: Biblioteca para el hashing de contraseñas.
- `cors`: Middleware para habilitar CORS en Express.
- `express`: Framework web para Node.js.
- `jsonwebtoken`: Implementación de JSON Web Tokens (JWT) para la autenticación.
- `mongoose`: Biblioteca de modelado de objetos para MongoDB.
- `morgan`: Middleware para el registro de solicitudes HTTP en Express.
- `swagger-ui-express`: Biblioteca para generar documentación interactiva de API con Swagger.




