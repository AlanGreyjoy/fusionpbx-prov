const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContacts', {
    contact_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_parent_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_organization: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_name_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_name_given: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_name_middle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_name_family: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_name_suffix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_nickname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_role: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_time_zone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_mod_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_mod_user: {
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
    tableName: 'v_contacts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contacts_pkey",
        unique: true,
        fields: [
          { name: "contact_uuid" },
        ]
      },
    ]
  });
};
