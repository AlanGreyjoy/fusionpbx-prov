const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VBridges', {
    bridge_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    bridge_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bridge_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bridge_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bridge_description: {
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
    tableName: 'v_bridges',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_bridges_pkey",
        unique: true,
        fields: [
          { name: "bridge_uuid" },
        ]
      },
    ]
  });
};
