const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDefaultSettings', {
    default_setting_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    app_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    default_setting_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_setting_subcategory: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_setting_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_setting_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    default_setting_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    default_setting_description: {
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
    tableName: 'v_default_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_default_settings_pkey",
        unique: true,
        fields: [
          { name: "default_setting_uuid" },
        ]
      },
    ]
  });
};
