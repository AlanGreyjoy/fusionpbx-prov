const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceKeys', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_key_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    device_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_key_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    device_key_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_vendor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_subtype: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_line: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    device_key_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_protected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_key_icon: {
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
    tableName: 'v_device_keys',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_keys_pkey",
        unique: true,
        fields: [
          { name: "device_key_uuid" },
        ]
      },
    ]
  });
};
