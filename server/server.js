const express = require('express');
const path = require('path');

const app = express();

// Define una ruta para servir el archivo data.json
app.get('/data', (req, res) => {
  res.sendFile(path.join(__dirname, '../data/data.json'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

