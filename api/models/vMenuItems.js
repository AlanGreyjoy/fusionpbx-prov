const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VMenuItems', {
    menu_item_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    menu_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    menu_item_parent_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    menu_item_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_icon: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_protected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    menu_item_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_add_user: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_add_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_mod_user: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    menu_item_mod_date: {
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
    tableName: 'v_menu_items',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_menu_items_pkey",
        unique: true,
        fields: [
          { name: "menu_item_uuid" },
        ]
      },
    ]
  });
};
