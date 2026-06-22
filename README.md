# GameCollection - Backend

## Descripción

Este repositorio contiene el backend del proyecto final de Programación III en la carrera TUP, Universidad Tecnológica Nacional. Se presenta como contenido para realizar el segundo parcial de la misma materia.

El proyecto es en una biblioteca de videojuegos al estilo de plataformas como Steam, Epic Games, GOG, entre otros. Consiste de una base de datos en PostgreSQL utilizando Sequelize para elaborar y utilizar modelos de objetos en JavaScript y utilizados como tablas, ejecutado desde Docker.

## Integrantes

### Grupo 11

- Matías Carrizo
- Jeremías Claros
- María Rodriguez
- Matko Scabusso

## Tecnologías utilizadas

- Node.js
- Cors
- Dotenv
- Express
- PostgreSQL
- Sequelize + pg-hstore
- Nodemon
- JavaScript
- Docker

## Metodología de trabajo

Trabajamos con un repositorio remoto en GitHub, cada integrante posee su propia rama de trabajo donde puede trabajar cómodamente sin alterar el trabajo de los demas para posteriormente ir volcando los cambios realizados en cada rama en la rama `dev`, probando como afectan los cambios enviados al proyecto general y si están bien implementados. Cuando se llega a una versión estable y funcional de la aplicación, se pasan los cambios de la rama `dev` a `main`, concluyendo así en una versión estable definitiva.

### Matías Carrizo

Creación del repositorio e instalación de dependencias.
Rutas y controladores.
Testeo de operaciones CRUD en Postman.

### Jeremías Claros

Docker compose.
Documentación del README.

### María Rodriguez

Creación de la base de datos (database.js).
Operaciones CRUD.
Testeo de operaciones CRUD en Postman.

### Matko Scabusso

Modelos de Sequelize.
Relaciones entre tablas.
Redacción del README.

## Estructura del proyecto

```
G11-Parcial2-GameCollection
├ backend
│ ├ models
│ │ ├ coleccion.model.ts
│ │ ├ juego.model.ts
│ │ ├ relaciones.ts
│ │ └ usuario.model.ts
│ ├ src
│ │ ├ config
│ │ │ └ database.js
│ │ ├ controllers
│ │ │ ├ coleccion.routes.js
│ │ │ ├ index.js
│ │ │ ├ juego.routes.js
│ │ │ └ usuario.routes.js
│ │ └ app.js
│ ├ .gitignore
│ ├ package-lock.json
│ ├ package.json
│ ├ pnpm-lock.yaml
│ ├ server.js
│ └ Dockerfile
├ misc
│ └ Diagrama MER.drawio.svg
├ docker-compose.yml
└ README.md
```

## Endpoints principales

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET    | /api/usuarios | Obtener usuarios |
| POST   | /api/juegos | Crear un juego |
| PUT    | /api/colecciones/:id | Actualizar una colección |
| DELETE | /api/usuarios/:id | Eliminar usuario |

## Docker - Inicio rápido

### Requisitos
- Docker
- Docker compose

### Levantar proyecto
```bash
docker compose up --build
```

### Detener proyecto
```bash
docker compose down
```

El proyecto se ejecuta utilizando Docker compose, levantando backend y base de datos con un solo comando.