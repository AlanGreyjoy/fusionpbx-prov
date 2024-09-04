const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VExtensionSettings', {
    extension_setting_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    extension_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    extension_setting_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_setting_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_setting_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    extension_setting_description: {
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
    tableName: 'v_extension_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_extension_settings_pkey",
        unique: true,
        fields: [
          { name: "extension_setting_uuid" },
        ]
      },
    ]
  });
};
