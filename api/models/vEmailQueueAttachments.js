const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEmailQueueAttachments', {
    email_queue_attachment_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    email_queue_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    email_attachment_mime_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attachment_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attachment_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attachment_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attachment_base64: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_attachment_cid: {
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
    tableName: 'v_email_queue_attachments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_email_queue_attachments_pkey",
        unique: true,
        fields: [
          { name: "email_queue_attachment_uuid" },
        ]
      },
    ]
  });
};
