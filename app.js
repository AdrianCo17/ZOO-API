const express = require('express');
const app = express();
const cors = require('cors');
const animalRoutes = require('./routes/animalRoutes');
const alimentacionRoutes = require('./routes/alimentacionRoutes');
const especieRoutes = require('./routes/especieRoutes');
const habitatRoutes = require('./routes/habitatRoutes');
const origenRoutes = require('./routes/origenRoutes');
const riesgoRoutes = require('./routes/riesgoRoutes');
const TipoReproduccion = require('./routes/tipoReproduccionRoutes');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas de la API
app.use(animalRoutes);
app.use(alimentacionRoutes);
app.use(especieRoutes);
app.use(habitatRoutes);
app.use(origenRoutes);
app.use(riesgoRoutes);
app.use(TipoReproduccion);

app.get('/', (req, res) => {
  res.send('Hello, zoo api!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

