const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VRingGroups', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ring_group_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    ring_group_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_greeting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_call_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ring_group_forward_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_forward_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_cid_name_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_cid_number_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_strategy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_timeout_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_timeout_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_distinctive_ring: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_ringback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_call_forward_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_follow_me_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_missed_call_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_missed_call_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ring_group_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ring_group_forward_toll_allow: {
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
    tableName: 'v_ring_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_ring_groups_pkey",
        unique: true,
        fields: [
          { name: "ring_group_uuid" },
        ]
      },
    ]
  });
};
