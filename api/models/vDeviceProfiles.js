const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceProfiles', {
    device_profile_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_profile_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_profile_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    device_profile_description: {
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
    tableName: 'v_device_profiles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_profiles_pkey",
        unique: true,
        fields: [
          { name: "device_profile_uuid" },
        ]
      },
    ]
  });
};
