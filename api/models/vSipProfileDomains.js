const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VSipProfileDomains', {
    sip_profile_domain_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sip_profile_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    sip_profile_domain_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_profile_domain_alias: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_profile_domain_parse: {
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
    tableName: 'v_sip_profile_domains',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_sip_profile_domains_pkey",
        unique: true,
        fields: [
          { name: "sip_profile_domain_uuid" },
        ]
      },
    ]
  });
};
