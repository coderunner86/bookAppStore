const axios = require('axios');

const apiUrl = 'http://localhost:3001/bookRequest';

axios.get(apiUrl)
  .then(response => {
    console.log('Respuesta de la API:', response.data);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });

