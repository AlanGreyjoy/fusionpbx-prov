const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEmailQueue', {
    email_queue_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    hostname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    email_from: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_to: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_subject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_retry_count: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    email_action_before: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_action_after: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    email_transcription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_response: {
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
    tableName: 'v_email_queue',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_email_queue_pkey",
        unique: true,
        fields: [
          { name: "email_queue_uuid" },
        ]
      },
    ]
  });
};
