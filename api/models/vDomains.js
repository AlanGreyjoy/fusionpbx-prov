const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDomains', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_parent_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    domain_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    domain_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    domain_description: {
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
    tableName: 'v_domains',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_domains_pkey",
        unique: true,
        fields: [
          { name: "domain_uuid" },
        ]
      },
    ]
  });
};
