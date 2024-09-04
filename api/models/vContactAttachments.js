const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactAttachments', {
    contact_attachment_uuid: {
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
    attachment_primary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    attachment_filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachment_content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachment_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachment_uploaded_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    attachment_uploaded_user_uuid: {
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
    tableName: 'v_contact_attachments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_attachments_pkey",
        unique: true,
        fields: [
          { name: "contact_attachment_uuid" },
        ]
      },
    ]
  });
};
