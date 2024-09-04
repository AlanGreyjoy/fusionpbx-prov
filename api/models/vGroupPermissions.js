const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VGroupPermissions', {
    group_permission_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    permission_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    permission_protected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    permission_assigned: {
      type: DataTypes.TEXT,
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
    tableName: 'v_group_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_group_permissions_pkey",
        unique: true,
        fields: [
          { name: "group_permission_uuid" },
        ]
      },
    ]
  });
};
