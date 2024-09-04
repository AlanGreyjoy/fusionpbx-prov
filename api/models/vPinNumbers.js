const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VPinNumbers', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    pin_number_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    pin_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accountcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
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
    tableName: 'v_pin_numbers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_pin_numbers_pkey",
        unique: true,
        fields: [
          { name: "pin_number_uuid" },
        ]
      },
    ]
  });
};
