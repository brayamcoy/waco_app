# Proyecto Waco Test

Este es el proyecto Waco Test, desarrollado con Next.js.

## Requisitos previos

Asegúrate de tener instalada la versión de Node.js v18.16.0. Puedes verificar la versión instalada ejecutando el siguiente comando en tu terminal:


## Instalación

1. Clona este repositorio en tu máquina local: git clone https://github.com/tu-usuario/waco_app.git


2. Navega hasta el directorio del proyecto: cd web


3. Instala las dependencias del proyecto utilizando npm: npm install


## Variables de entorno

El proyecto utiliza variables de entorno para configurar ciertos valores. Asegúrate de crear un archivo `.env.local` en la raíz del proyecto y define las siguientes variables de entorno en él siguiente ejemplo:

NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_POKE_API_URL=https://pokeapi.co/api/v2


Asegúrate de reemplazar los valores de las URLs según corresponda.

## Uso

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

npm run dev

Esto iniciará la aplicación en modo de desarrollo en la dirección http://localhost:3000.

## Scripts disponibles

En el proyecto, puedes ejecutar los siguientes scripts:

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm start`: Inicia la aplicación en modo de producción.
- `npm run lint`: Ejecuta el linter para verificar el código.

## Dependencias principales

A continuación se muestra una lista de las dependencias principales utilizadas en el proyecto:

- `axios`: Cliente HTTP para realizar solicitudes a servicios web.
- `formik`: Biblioteca para trabajar con formularios en React.
- `react-hot-toast`: Biblioteca para mostrar notificaciones en la aplicación.
- `react-icons`: Biblioteca de iconos para React.
- `react-spinners`: Componentes de spinner animados para React.
- `tailwindcss`: Framework CSS para estilizar la aplicación.
- `typescript`: Lenguaje de programación tipado utilizado en el proyecto.
- `universal-cookie`: Biblioteca para manejar cookies en entornos universales.





