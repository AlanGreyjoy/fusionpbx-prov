const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVoicemails', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    voicemail_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    greeting_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    voicemail_alternate_greet_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    voicemail_recording_instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_recording_options: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_mail_to: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_sms_to: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_transcription_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_attach_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_local_after_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_name_base64: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_tutorial: {
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
    tableName: 'v_voicemails',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_voicemails_pkey",
        unique: true,
        fields: [
          { name: "voicemail_uuid" },
        ]
      },
    ]
  });
};
