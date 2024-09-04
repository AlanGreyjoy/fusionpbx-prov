const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceVendorFunctions', {
    device_vendor_function_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    device_vendor_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subtype: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    value: {
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
    tableName: 'v_device_vendor_functions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_vendor_functions_pkey",
        unique: true,
        fields: [
          { name: "device_vendor_function_uuid" },
        ]
      },
    ]
  });
};
