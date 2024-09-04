const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VMenuLanguages', {
    menu_language_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    menu_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    menu_item_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    menu_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_title: {
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
    tableName: 'v_menu_languages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_menu_languages_pkey",
        unique: true,
        fields: [
          { name: "menu_language_uuid" },
        ]
      },
    ]
  });
};
