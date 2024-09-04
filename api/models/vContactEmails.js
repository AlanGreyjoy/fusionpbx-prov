const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactEmails', {
    contact_email_uuid: {
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
    email_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_primary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    email_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_description: {
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
    tableName: 'v_contact_emails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_emails_pkey",
        unique: true,
        fields: [
          { name: "contact_email_uuid" },
        ]
      },
    ]
  });
};
