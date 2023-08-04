const express = require('express');
const app = express();
const animalRoutes = require('./routes/animalRoutes');
const alimentacionRoutes = require('./routes/alimentacionRoutes');
const especieRoutes = require('./routes/especieRoutes');
const habitatRoutes = require('./routes/habitatRoutes');
const origenRoutes = require('./routes/origenRoutes');

const PORT = process.env.PORT || 3000;

// Rutas de la API
app.use(animalRoutes);
app.use(alimentacionRoutes);
app.use(especieRoutes);
app.use(habitatRoutes);
app.use(origenRoutes);

app.get('/', (req, res) => {
  res.send('Hello, this is the root directory!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

