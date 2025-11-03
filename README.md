# API de Libros - Node.js con Express y PostgreSQL

Una aplicación sencilla desarrollada en Node.js utilizando Express y PostgreSQL para consultar una base de datos de libros. Este proyecto práctica la conexión a PostgreSQL mediante el paquete `pg`, implementa pooling de conexiones, manejo de variables de entorno y consultas simples a la base de datos.

## Autor

**Magdalena Inalaf**

- **GitHub:** [@MagdaIG](https://github.com/MagdaIG)
- **LinkedIn:** [Magdalena Inalaf](https://www.linkedin.com/in/minalaf/)
- **Página Web:** [inalaf.ca](https://inalaf.ca/)
- **Email:** magda.inalaf@gmail.com

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 14 o superior)
- **PostgreSQL** (versión 12 o superior)
- **npm** (incluido con Node.js)

## Instalación y Configuración

### 1. Clonar o descargar el proyecto

Si tienes el proyecto en un repositorio:
```bash
git clone <url-del-repositorio>
cd bd-libros
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará las siguientes dependencias:
- `express`: Framework web para Node.js
- `pg`: Cliente PostgreSQL para Node.js
- `dotenv`: Para manejar variables de entorno

### 3. Configurar PostgreSQL

#### 3.1. Crear la base de datos

Conéctate a PostgreSQL y crea la base de datos:

```bash
psql -U postgres
```

En la consola de PostgreSQL, ejecuta:

```sql
CREATE DATABASE librosdb;
```

#### 3.2. Crear la tabla e insertar datos de ejemplo

Conéctate a la base de datos `librosdb`:

```bash
psql -U postgres -d librosdb
```

Ejecuta el script SQL incluido en el proyecto:

```bash
psql -U postgres -d librosdb -f schema.sql
```

O puedes ejecutarlo manualmente copiando el contenido de `schema.sql`.

### 4. Configurar variables de entorno

Edita el archivo `.env` en la raíz del proyecto y actualiza las credenciales según tu configuración de PostgreSQL:

```env
DB_USER=postgres
DB_PASSWORD=tu_contraseña_real
DB_HOST=localhost
DB_PORT=5432
DB_NAME=librosdb
```

**Importante:** Reemplaza `tu_contraseña_real` con tu contraseña real de PostgreSQL.

## Cómo Ejecutar la Aplicación

### Iniciar el servidor

```bash
npm start
```

O también puedes usar:

```bash
node server.js
```

Deberías ver en la consola:

```
Conectado a PostgreSQL
Servidor corriendo en http://localhost:3000
```

## Endpoints de la API

### Obtener todos los libros

**GET** `/api/libros`

**Respuesta exitosa:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "titulo": "Cien años de soledad",
      "autor": "Gabriel García Márquez",
      "anio": 1967
    },
    ...
  ],
  "count": 5
}
```

### Ruta raíz

**GET** `/`

Muestra información sobre la API y los endpoints disponibles.

## Cómo Probar la Aplicación

### Método 1: Navegador

1. Abre tu navegador web
2. Ve a `http://localhost:3000` para ver el mensaje de bienvenida
3. Ve a `http://localhost:3000/api/libros` para ver la lista de libros

### Método 2: cURL

```bash
# Probar la ruta raíz
curl http://localhost:3000

# Obtener todos los libros
curl http://localhost:3000/api/libros
```

### Método 3: Postman o Insomnia

- **GET** `http://localhost:3000/api/libros`

## Estructura del Proyecto

```
bd-libros/
├── db/
│   └── pool.js          # Configuración del pool de conexión PostgreSQL
├── routes/
│   └── libros.js        # Rutas para consultar libros
├── .env                 # Variables de entorno (no incluido en git)
├── .gitignore           # Archivos ignorados por git
├── server.js            # Servidor Express principal
├── package.json         # Dependencias y scripts
├── package-lock.json    # Lock file de dependencias
├── schema.sql           # Script SQL para crear tabla y datos de ejemplo
└── README.md            # Este archivo
```

## Características Técnicas

- **Pool de Conexiones**: Utiliza un pool de conexiones de PostgreSQL para gestionar múltiples conexiones de manera eficiente
- **Manejo de Errores**: Implementa manejo de errores tanto en la conexión como en las consultas
- **Variables de Entorno**: Utiliza `dotenv` para gestionar credenciales de forma segura
- **Async/Await**: Utiliza funciones asíncronas para manejar las consultas a la base de datos
- **Express Router**: Organiza las rutas de manera modular

## Solución de Problemas

### Error: "No se puede conectar a PostgreSQL"

1. Verifica que PostgreSQL esté ejecutándose:
   ```bash
   # En macOS/Linux
   sudo service postgresql status
   
   # O verifica los procesos
   ps aux | grep postgres
   ```

2. Verifica las credenciales en el archivo `.env`

3. Asegúrate de que la base de datos `librosdb` exista

### Error: "relation 'libros' does not exist"

Ejecuta el script `schema.sql` para crear la tabla:
```bash
psql -U postgres -d librosdb -f schema.sql
```

### Error: "password authentication failed"

Verifica que la contraseña en el archivo `.env` sea correcta.

## Notas Adicionales

- El archivo `.env` contiene información sensible y **NO debe** ser incluido en el control de versiones
- Asegúrate de tener un archivo `.gitignore` que incluya `.env` y `node_modules/`
- El servidor corre en el puerto 3000 por defecto. Puedes cambiarlo agregando `PORT=8080` en el archivo `.env`

## Próximos Pasos

Posibles mejoras para el proyecto:

- [ ] Agregar más rutas (obtener libro por ID, crear, actualizar, eliminar)
- [ ] Implementar validación de datos
- [ ] Agregar paginación para grandes volúmenes de datos
- [ ] Implementar autenticación y autorización
- [ ] Agregar tests unitarios e integración

---

Desarrollado por Magdalena Inalaf

