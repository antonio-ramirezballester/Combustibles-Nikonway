# API COMBUSTIBLES CON NODE.js Y EXPRESS

## Pasos inciales
- Crear directorio del proyecto "combustibles"
- Inicializar proyecto dentro de "combustibles" ejecutando:
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
 - Entrar y crear la BD de datos "combustibles"
 - Crear la colección con el mismo nombre "combustibles"
 - crear algunos documentos json de ejemplo 

## Código de la aplicación

1. Crear index con código express

2. Crear modelos
- Crear carpeta models
- Crear archivo Combustibles.js

3. Crear controllers (operaciones CRUD)
- Crear carpeta controllers
- Crear archivo combustiblesController.js

4. Crear rutas
- Crear carpeta routes
- Crear archivo index.js

## Arrancar servidor
    npm start

## PROBAR LA API (endpoints)

### Mostrar todos los combustibles
Acceder al navegador con la url 
http://localhost:5000/combustibles

### Mostrar un curso específico
Acceder através de la id de un curso (el id depende de cada base de datos)
http://localhost:5000/combustibles/60814fe3b4030ff9ac3af514

Utilizando Postman
![Combustibles get](./screenshots/combustibles_get.png)

### Insertar un nuevo curso utilizando Postman
![Combustibles post](./screenshots/combustibles_post.png)

### Modificar los datos de un curso existente utilizando Postman
![Combustibles put](./screenshots/combustibles_put.png)

### Borrando un curso existente utilizando Postman
![Combustibles delete](./screenshots/combustibles_delete.png)

# Recursos
https://expressjs.com/es/api.html
https://mongoosejs.com/docs/guide.html
https://docs.npmjs.com/
https://nodejs.org/es/
https://docs.mongodb.com/manual/