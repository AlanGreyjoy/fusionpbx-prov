const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceProfileKeys', {
    device_profile_key_uuid: {
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
    profile_key_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    profile_key_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_vendor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_subtype: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_line: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    profile_key_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_protected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_key_icon: {
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
    tableName: 'v_device_profile_keys',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_profile_keys_pkey",
        unique: true,
        fields: [
          { name: "device_profile_key_uuid" },
        ]
      },
    ]
  });
};
