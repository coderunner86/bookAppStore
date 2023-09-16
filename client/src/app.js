const axios = require('axios');

const apiUrl = 'http://localhost:3001/bookRequest';

const listarLibros = async () => {
  try {
    const response = await axios.get(apiUrl);
    console.log('Libros:', response.data);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
  }
};

const eliminarReserva = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/bookRequest/${id}/reserva`);

    if (response.data.message === 'Reserva eliminada exitosamente') {
      console.log('Reserva eliminada exitosamente');
    } else {
      console.error('Error al eliminar la reserva:', response.data.error);
    }
  } catch (error) {
    console.error('Error al eliminar la reserva:', error);
  }
};

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

const actualizarLibro = async (id, nuevoTitulo, nuevoAutor) => {
  try {
    const response = await axios.get(apiUrl);
    const libro = response.data.find(libro => libro.id === parseInt(id));

    if (!libro) {
      console.error('Libro no encontrado');
      return;
    }

    libro.titulo = nuevoTitulo;
    libro.autor = nuevoAutor;

    await axios.put(`${apiUrl}/${id}`, { titulo: nuevoTitulo, autor: nuevoAutor });

    console.log('Libro actualizado:', libro);
  } catch (error) {
    console.error('Error al actualizar el libro:', error);
  }
};

/* Ejemplos de uso
listarLibros();  // Listar los libros
crearReserva(2, 'Jonny Be Good');  // Reservar el libro con ID 2
actualizarLibro(1, 'La Ilíada', 'Homero');  // Actualizar el libro con ID 1
eliminarReserva(1);  // Eliminar una reserva por su ID
*/ 
