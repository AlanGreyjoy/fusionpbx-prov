const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceVendorFunctionGroups', {
    device_vendor_function_group_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    device_vendor_function_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_vendor_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    group_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    group_uuid: {
      type: DataTypes.UUID,
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
    tableName: 'v_device_vendor_function_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_vendor_function_groups_pkey",
        unique: true,
        fields: [
          { name: "device_vendor_function_group_uuid" },
        ]
      },
    ]
  });
};
