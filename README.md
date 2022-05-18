# API CURSOS CON NODE.js Y EXPRESS

## Pasos inciales
- Crear directorio del proyecto "cursos"
- Inicializar proyecto dentro de "cursos" ejecutando:
    npm init

- Nota: Si es un proyecto ya configurado ejecutar:
`
  npm install
Con este comando se bajaran todas las dependencias y no será necesario instalarlas.

## Instalación de dependencias
### Libreria express para crear la API
    npm install --save express

### Servidor de nodmon para que se reinicie el servidor cada vez que guardemos los cambios
    npm install --save-dev nodemon

### En package.json canviar "test:..." por
    "start": "nodemon ./index"

### Instalación del ORD Mongoose 
Nos servirá para crear los modelos relacinados con las colecciones de MongoDB

    npm install --save mongoose

### Instalación de cors para que se pueda consumir la API de otras URL's
    npm install --save cors

### Paquete para recoger los daatos de los formularios
    npm install body-parser
    
## Instalar MongoDB Compass
 - Entrar y crear la BD de datos "cursos"
 - Crear la colección con el mismo nombre "cursos"
 - crear algunos documentos json de ejemplo 

## Código de la aplicación

1. Crear index con código express

2. Crear modelos
- Crear carpeta models
- Crear archivo Cursos.js

3. Crear controllers (operaciones CRUD)
- Crear carpeta controllers
- Crear archivo cursosController.js

4. Crear rutas
- Crear carpeta routes
- Crear archivo index.js

## Arrancar servidor
    npm start

## PROBAR LA API (endpoints)

### Mostrar todos los cursos
Acceder al navegador con la url 
http://localhost:5000/cursos

### Mostrar un curso específico
Acceder através de la id de un curso (el id depende de cada base de datos)
http://localhost:5000/cursos/60814fe3b4030ff9ac3af514

Utilizando Postman
![Cursos get](./screenshots/cursos_get.png)

### Insertar un nuevo curso utilizando Postman
![Cursos post](./screenshots/cursos_post.png)

### Modificar los datos de un curso existente utilizando Postman
![Cursos put](./screenshots/cursos_put.png)

### Borrando un curso existente utilizando Postman
![Cursos delete](./screenshots/cursos_delete.png)

# Recursos
https://expressjs.com/es/api.html
https://mongoosejs.com/docs/guide.html
https://docs.npmjs.com/
https://nodejs.org/es/
https://docs.mongodb.com/manual/