const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactAddresses', {
    contact_address_uuid: {
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
    address_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_primary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    address_street: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_extended: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_community: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_locality: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_region: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_postal_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_latitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_longitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address_description: {
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
    tableName: 'v_contact_addresses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_addresses_pkey",
        unique: true,
        fields: [
          { name: "contact_address_uuid" },
        ]
      },
    ]
  });
};
