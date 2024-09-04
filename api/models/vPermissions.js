const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VPermissions', {
    permission_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    application_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    application_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    permission_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    permission_description: {
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
    tableName: 'v_permissions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_permissions_pkey",
        unique: true,
        fields: [
          { name: "permission_uuid" },
        ]
      },
    ]
  });
};
