const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDatabases', {
    database_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    database_driver: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_host: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_port: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    database_description: {
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
    tableName: 'v_databases',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_databases_pkey",
        unique: true,
        fields: [
          { name: "database_uuid" },
        ]
      },
    ]
  });
};
