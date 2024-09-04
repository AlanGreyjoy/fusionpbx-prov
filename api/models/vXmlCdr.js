const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VXmlCdr', {
    xml_cdr_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    provider_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    extension_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    sip_call_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    domain_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accountcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    default_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    context: {
      type: DataTypes.TEXT,
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
    caller_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    source_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    start_stamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    answer_stamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    answer_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_stamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    duration: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    mduration: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    billsec: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    billmsec: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    bridge_uuid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    read_codec: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    read_rate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    write_codec: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    write_rate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remote_media_ip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    network_addr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    record_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    record_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    record_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    leg: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    originating_leg_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    pdd_ms: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rtp_audio_in_mos: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    last_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_arg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    voicemail_message: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    missed_call: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    call_center_queue_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    cc_side: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_member_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    cc_queue_joined_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cc_queue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_member_session_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    cc_agent_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    cc_agent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_agent_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_agent_bridged: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_queue_answered_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cc_queue_terminated_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cc_queue_canceled_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cc_cancel_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cc_cause: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    waitsec: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    conference_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_member_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    digits_dialed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pin_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hangup_cause: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hangup_cause_q850: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sip_hangup_disposition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    xml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    json: {
      type: DataTypes.JSONB,
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
    tableName: 'v_xml_cdr',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_xml_cdr_pkey",
        unique: true,
        fields: [
          { name: "xml_cdr_uuid" },
        ]
      },
    ]
  });
};
