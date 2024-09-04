const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactGroups', {
    contact_group_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_uuid: {
      type: DataTypes.UUID,
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
    tableName: 'v_contact_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_groups_pkey",
        unique: true,
        fields: [
          { name: "contact_group_uuid" },
        ]
      },
    ]
  });
};
