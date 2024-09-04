const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactSettings', {
    contact_setting_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    contact_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_setting_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_setting_subcategory: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_setting_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_setting_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_setting_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    contact_setting_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_setting_description: {
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
    tableName: 'v_contact_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_settings_pkey",
        unique: true,
        fields: [
          { name: "contact_setting_uuid" },
        ]
      },
    ]
  });
};
