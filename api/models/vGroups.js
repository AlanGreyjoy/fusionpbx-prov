const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VGroups', {
    group_uuid: {
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
    group_protected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    group_level: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    group_description: {
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
    tableName: 'v_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_groups_pkey",
        unique: true,
        fields: [
          { name: "group_uuid" },
        ]
      },
    ]
  });
};
