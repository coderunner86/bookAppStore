const express = require('express');
const path = require('path');
const fs = require('fs');  

const app = express();


app.get('/bookRequest', (req, res) => {

  fs.readFile(path.join(__dirname, '../data/data.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo data.json:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      const libros = JSON.parse(data);  
      res.json(libros);
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
;

