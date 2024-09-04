const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCallCenterAgents', {
    call_center_agent_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    agent_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_call_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_contact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_logout: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_max_no_answer: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_wrap_up_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_reject_delay_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_busy_delay_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    agent_no_answer_delay_time: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agent_record: {
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
    tableName: 'v_call_center_agents',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_call_center_agents_pkey",
        unique: true,
        fields: [
          { name: "call_center_agent_uuid" },
        ]
      },
    ]
  });
};
