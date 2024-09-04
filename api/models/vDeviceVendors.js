const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceVendors', {
    device_vendor_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
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
    tableName: 'v_device_vendors',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_vendors_pkey",
        unique: true,
        fields: [
          { name: "device_vendor_uuid" },
        ]
      },
    ]
  });
};
