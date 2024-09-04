const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVoicemailGreetings', {
    voicemail_greeting_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    greeting_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    greeting_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    greeting_filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    greeting_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    greeting_base64: {
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
    tableName: 'v_voicemail_greetings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_voicemail_greetings_pkey",
        unique: true,
        fields: [
          { name: "voicemail_greeting_uuid" },
        ]
      },
    ]
  });
};
