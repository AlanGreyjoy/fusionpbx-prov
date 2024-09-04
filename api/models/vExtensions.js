const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VExtensions', {
    extension_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_alias: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accountcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    effective_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    effective_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outbound_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outbound_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    emergency_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    emergency_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directory_first_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directory_last_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directory_visible: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directory_exten_visible: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    max_registrations: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    limit_max: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    limit_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    missed_call_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    missed_call_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    toll_allow: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    call_group: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_screen_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_record: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hold_music: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    auth_acl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cidr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_force_contact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nibble_account: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_force_expires: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mwi_account: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_bypass_media: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    unique_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dial_string: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dial_user: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dial_domain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    do_not_disturb: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_all_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_all_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_busy_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_busy_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_no_answer_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_no_answer_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_user_not_registered_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    forward_user_not_registered_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    follow_me_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    follow_me_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    follow_me_destinations: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_dialect: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_voice: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    absolute_codec_string: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    force_ping: {
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
    tableName: 'v_extensions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_extensions_pkey",
        unique: true,
        fields: [
          { name: "extension_uuid" },
        ]
      },
    ]
  });
};
