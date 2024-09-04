const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VAccessControlNodes', {
    access_control_node_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    access_control_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    node_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    node_cidr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    node_description: {
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
    tableName: 'v_access_control_nodes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_access_control_nodes_pkey",
        unique: true,
        fields: [
          { name: "access_control_node_uuid" },
        ]
      },
    ]
  });
};
