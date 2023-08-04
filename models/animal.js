const { DataTypes } = require('sequelize');
const db = require('../config/database');
const Riesgo = require('./riesgo');
const TipoReproduccion = require('./tipoReproduccion');
const Alimentacion = require('./alimentacion');
const Especie = require('./especie');
const Habitat = require('./habitat');
const Origen = require('./origen');

const Animal = db.define('Animal', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  scientific_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tamanio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  link_video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link_map: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link_audio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link_gif: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},
{
  tableName: "animal",
});

// Definir las relaciones
Animal.belongsTo(Riesgo, { as: 'Riesgo', foreignKey: 'riesgo_id' });
Animal.belongsTo(TipoReproduccion, { as: 'TipoReproduccion', foreignKey: 'tipo_reproduccion_id' });
Animal.belongsTo(Alimentacion, { as: 'Alimentacion', foreignKey: 'alimentacion_id' });
Animal.belongsTo(Especie, { as: 'Especie', foreignKey: 'especie_id' });
Animal.belongsTo(Habitat, { as: 'Habitat', foreignKey: 'habitat_id' });
Animal.belongsTo(Origen, { as: 'Origen', foreignKey: 'origen_id' });

module.exports = Animal;
