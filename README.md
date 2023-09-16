<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** Asegúrate de personalizar los enlaces a las imágenes y otros enlaces a tu proyecto.
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">API de Gestión de Libros</h3>
  <p align="center">
    Una API para gestionar libros y reservas relacionadas con los mismos.
    <br />
    <a href="#top">Volver al inicio</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de Contenidos</summary>
  <ol>
    <li><a href="#about-the-project">Acerca del Proyecto</a></li>
    <li><a href="#usage">Uso de la API</a></li>
    <li><a href="#examples">Ejemplos de Uso</a></li>
    <li><a href="#installation">Configuración y Ejecución</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto

[Descripción del proyecto]

<p align="right">(<a href="#top">Volver al inicio</a>)</p>

<!-- USAGE -->
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
npm install

<!-- EXAMPLES -->

## Ejemplos de Uso
Puedes descomentar y ejecutar los siguientes ejemplos de uso para interactuar con la API.
```javascript
listarLibros();  // Listar los libros
crearReserva(2, 'Jonny Be Good');  // Reservar el libro con ID 2
actualizarLibro(1, 'La Ilíada', 'Homero');  // Actualizar el libro con ID 1
eliminarReserva(1);  // Eliminar una reserva por su ID 
<p align="right">(<a href="#top">Volver al inicio</a>)</p>



