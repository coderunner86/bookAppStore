# bookAppStore
# API de Gestión de Libros
# Diagrama UML
![UML](assets/UML/booksAppER_UML.drawio.html "Por favor, da Click aquí para ver la Imagen SVG")
Esta API permite gestionar libros y reservas relacionadas con los mismos.

## Uso de la API

### Base URL
La URL base para acceder a la API es: `http://localhost:3001/`

### Listar Libros
- **Método:** GET
- **Endpoint:** `/bookRequest`
- **Descripción:** Obtiene la lista de libros disponibles.

### Crear Reserva
- **Método:** POST
- **Endpoint:** `/:idLibro/reserva`
- **Descripción:** Crea una reserva para el libro especificado.
- **Parámetros:**
  - `idLibro`: El ID del libro para el cual se desea hacer la reserva.
  - `nombreUsuario`: El nombre del usuario que realiza la reserva.

### Actualizar Libro
- **Método:** PUT
- **Endpoint:** `/:id`
- **Descripción:** Actualiza la información de un libro.
- **Parámetros:**
  - `id`: El ID del libro que se desea actualizar.
  - `nuevoTitulo`: El nuevo título para el libro.
  - `nuevoAutor`: El nuevo autor para el libro.

### Eliminar Reserva
- **Método:** DELETE
- **Endpoint:** `/:id/reserva`
- **Descripción:** Elimina una reserva específica.
- **Parámetros:**
  - `id`: El ID de la reserva que se desea eliminar.
## Configuración y Ejecución

### Servidor

**Instalación de Dependencias:** Abre una terminal y navega a la carpeta del servidor:

```
cd server
npm install express
```
## Levantar el servidor: 
Ejecuta el siguiente comando para iniciar el servidor:
```
node server.js
```
## Cliente
**Instalación de Dependencias **
```
cd client/src/
npm install axios 
```
En otra terminal ejecuta el siguiente comando para iniciar el cliente:
```
node app.js
```
## Ejemplos de Uso
Debes descomentar y ejecutar los siguientes ejemplos de uso para interactuar con la API antes de poner a correr el cliente.

```javascript
listarLibros();  // Listar los libros
crearReserva(2, 'Jonny Be Good');  // Reservar el libro con ID 2
actualizarLibro(1, 'La Ilíada', 'Homero');  // Actualizar el libro con ID 1
eliminarReserva(1);  // Eliminar una reserva por su ID
