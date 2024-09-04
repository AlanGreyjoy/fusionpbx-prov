const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCountries', {
    country_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    iso_a2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    iso_a3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    num: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    country_code: {
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
    tableName: 'v_countries',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_countries_pkey",
        unique: true,
        fields: [
          { name: "country_uuid" },
        ]
      },
    ]
  });
};
