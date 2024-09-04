const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VUserGroups', {
    user_group_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
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
    user_uuid: {
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
    tableName: 'v_user_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_user_groups_pkey",
        unique: true,
        fields: [
          { name: "user_group_uuid" },
        ]
      },
    ]
  });
};
