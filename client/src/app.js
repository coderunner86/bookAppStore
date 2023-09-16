const axios = require('axios');

const apiUrl = 'http://localhost:3001/bookRequest';

axios.get(apiUrl)
  .then(response => {
    console.log('Respuesta de la API:', response.data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

const crearReserva = async (idLibro, nombreUsuario) => {
  try {
    const response = await axios.post(`http://localhost:3001/bookRequest/${idLibro}/reserva`, {
      nombreUsuario
    });

    console.log('Reserva realizada:', response.data.reserva);
  } catch (error) {
    console.error('Error al hacer la reserva:', error);
  }
};

// Actualizar un libro por su ID (ignorando la reserva si existe)
const actualizarLibro = async (id, nuevoTitulo, nuevoAutor) => {
  try {
    // Obtener la lista de libros
    const response = await axios.get(apiUrl);

    // Encuentra el libro por su ID
    const libro = response.data.find(libro => libro.id === parseInt(id));

    if (!libro) {
      console.error('Libro no encontrado');
      return;
    }

    // Actualizar el libro
    libro.titulo = nuevoTitulo;
    libro.autor = nuevoAutor;

    // Actualizar el libro en el servidor
    await axios.put(`${apiUrl}/${id}`, { titulo: nuevoTitulo, autor: nuevoAutor });

    console.log('Libro actualizado:', libro);
  } catch (error) {
    console.error('Error al actualizar el libro:', error);
  }
};

// Ejemplos de uso
crearReserva(1, 'John Doe');  //reservar el libro con ID 1
actualizarLibro(1, 'Nuevo Título', 'Nuevo Autor');  // actualizar el libro con ID 1

