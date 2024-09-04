const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VSofiaGlobalSettings', {
    sofia_global_setting_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    global_setting_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    global_setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    global_setting_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    global_setting_description: {
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
    tableName: 'v_sofia_global_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_sofia_global_settings_pkey",
        unique: true,
        fields: [
          { name: "sofia_global_setting_uuid" },
        ]
      },
    ]
  });
};
