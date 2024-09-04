const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVoicemailMessages', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_message_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    voicemail_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    created_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    read_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    message_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_priority: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_intro_base64: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_base64: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    message_transcription: {
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
    tableName: 'v_voicemail_messages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_voicemail_messages_pkey",
        unique: true,
        fields: [
          { name: "voicemail_message_uuid" },
        ]
      },
    ]
  });
};
