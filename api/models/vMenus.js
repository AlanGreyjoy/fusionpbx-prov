const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VMenus', {
    menu_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    menu_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_description: {
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
    tableName: 'v_menus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_menus_pkey",
        unique: true,
        fields: [
          { name: "menu_uuid" },
        ]
      },
    ]
  });
};
