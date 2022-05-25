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

### Paquete para recoger los datos de los formularios
    npm install body-parser
    
## Instalar MongoDB Compass
1. Entrar y crear la base de datos llamada "combustibles"

2. Crear colección llamada "combustibles"

3. Importar cualquiera de los 2 archivos guardados en la carpeta mongodb (recomendado el json ya que importa también el tipo de cada dato)

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

# Recursos
https://expressjs.com/es/api.html
https://mongoosejs.com/docs/guide.html
https://docs.npmjs.com/
https://nodejs.org/es/
https://docs.mongodb.com/manual/