const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCallCenterQueues', {
    call_center_queue_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    queue_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_greeting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_strategy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_moh_sound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_record_template: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_time_base_score: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_time_base_score_sec: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_max_wait_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_max_wait_time_with_no_agent: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_max_wait_time_with_no_agent_time_reached: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_tier_rules_apply: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_tier_rule_wait_second: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_tier_rule_no_agent_no_wait: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_timeout_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_discard_abandoned_after: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_abandoned_resume_allowed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_tier_rule_wait_multiply_level: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_cid_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_outbound_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_outbound_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_announce_position: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_announce_sound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_announce_frequency: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    queue_cc_exit_keys: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_email_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_description: {
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
    tableName: 'v_call_center_queues',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_call_center_queues_pkey",
        unique: true,
        fields: [
          { name: "call_center_queue_uuid" },
        ]
      },
    ]
  });
};
