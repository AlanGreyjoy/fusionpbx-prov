const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVoicemailOptions', {
    voicemail_option_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_option_digits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_option_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_option_param: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_option_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    voicemail_option_description: {
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
    tableName: 'v_voicemail_options',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_voicemail_options_pkey",
        unique: true,
        fields: [
          { name: "voicemail_option_uuid" },
        ]
      },
    ]
  });
};
