const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDevices', {
    device_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_profile_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_vendor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_model: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_firmware_version: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_enabled_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    device_template: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_user_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_uuid_alternate: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_provisioned_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    device_provisioned_method: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_provisioned_ip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_provisioned_agent: {
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
    tableName: 'v_devices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_devices_pkey",
        unique: true,
        fields: [
          { name: "device_uuid" },
        ]
      },
    ]
  });
};
