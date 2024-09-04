const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVars', {
    var_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    var_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    var_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    var_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    var_command: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    var_hostname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    var_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    var_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    var_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    insert_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    insert_user: {
      type: DataTypes.UUID,
      allowNull: true
    },
    update_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_user: {
      type: DataTypes.UUID,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'v_vars',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_vars_pkey",
        unique: true,
        fields: [
          { name: "var_uuid" },
        ]
      },
    ]
  });
};
