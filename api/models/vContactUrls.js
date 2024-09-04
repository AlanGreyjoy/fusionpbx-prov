const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactUrls', {
    contact_url_uuid: {
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
    url_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_primary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    url_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    url_description: {
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
    tableName: 'v_contact_urls',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_urls_pkey",
        unique: true,
        fields: [
          { name: "contact_url_uuid" },
        ]
      },
    ]
  });
};
