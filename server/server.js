const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());  // Middleware para parsear JSON

let libros;
let reservas = [];  // Array para almacenar las reservas

// Lee los libros desde el archivo data.json y asigna a la variable libros
fs.readFile(path.join(__dirname, '../data/data.json'), 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo data.json:', err);
    return;
  }

  const jsonData = JSON.parse(data);
  libros = jsonData.libros;
  reservas = jsonData.reservas || [];  // Si hay reservas previas, las cargamos
});

app.get('/bookRequest', (req, res) => {
  res.json(libros);
});

app.put('/bookRequest/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor } = req.body;

  // Encuentra el libro por su ID y actualiza sus datos
  libros.forEach(libro => {
    if (libro.id === parseInt(id)) {
      libro.titulo = titulo;
      libro.autor = autor;
    }
  });

  // Escribir los libros actualizados en el archivo data.json
  guardarEnArchivo();
  res.json({ message: 'Libro actualizado exitosamente' });
});

app.post('/bookRequest/:id/reserva', (req, res) => {
  const { id } = req.params;

  // Buscar el libro por su ID
  const libro = libros.find(libro => libro.id === parseInt(id));

  if (!libro) {
    res.status(404).json({ error: 'Libro no encontrado' });
    return;
  }

  // Crear una reserva y asociarla al libro
  const reserva = {
    id: reservas.length + 1, // ID único para la reserva
    idLibro: libro.id,
    nombreUsuario: req.body.nombreUsuario
  };

  reservas.push(reserva);
  guardarEnArchivo();

  res.json({ message: 'Reserva realizada exitosamente', reserva });
});

app.delete('/bookRequest/:id/reserva', (req, res) => {
  const reservaId = parseInt(req.params.id);

  const reservaIndex = reservas.findIndex(reserva => reserva.id === reservaId);
  if (reservaIndex !== -1) {
    reservas.splice(reservaIndex, 1);
    guardarEnArchivo();
    res.json({ message: 'Reserva eliminada exitosamente' });
  } else {
    res.status(404).json({ error: 'Reserva no encontrada' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

function guardarEnArchivo() {
  // Escribir libros y reservas en el archivo data.json
  const data = JSON.stringify({ libros, reservas }, null, 2);
  fs.writeFile(path.join(__dirname, '../data/data.json'), data, err => {
    if (err) {
      console.error('Error al escribir en el archivo data.json:', err);
    }
  });
}

