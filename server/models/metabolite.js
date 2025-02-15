import Sequelize from 'sequelize'
import db from '../config/database'

const Metabolite = db.define(
  'metabolite',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'name',
    },
    sbmlId: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'sbml_id',
    },
    initialConcentration: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'initial_concentration',
    },
    compartment: {
      type: Sequelize.STRING,
      allowNull: false,
      field: 'compartment',
    },
    modelId: {
      type: Sequelize.BIGINT,
      allowNull: false,
      references: {
        model: 'models',
        key: 'id',
      },
      field: 'model_id',
    },
  },
  {
    tableName: 'metabolites',
  }
)

export default Metabolite
