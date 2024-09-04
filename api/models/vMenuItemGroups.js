const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VMenuItemGroups', {
    menu_item_group_uuid: {
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
    group_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    group_uuid: {
      type: DataTypes.UUID,
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
    tableName: 'v_menu_item_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_menu_item_groups_pkey",
        unique: true,
        fields: [
          { name: "menu_item_group_uuid" },
        ]
      },
    ]
  });
};
