const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VSoftware', {
    software_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    software_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    software_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    software_version: {
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
    tableName: 'v_software',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_software_pkey",
        unique: true,
        fields: [
          { name: "software_uuid" },
        ]
      },
    ]
  });
};
