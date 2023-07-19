const {log} = require('console');

const express = require('express');

const app = express();

const PORT = 3030;

const path = require('path');

//    ----- C O N F I G U R A C I O N ----- 

app.use(express.static(path.join(__dirname, 'public')));

//           -----  R U T A S  ------

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));

app.listen(PORT, () => log('Servidor corriendo en http://localhost:' + PORT));