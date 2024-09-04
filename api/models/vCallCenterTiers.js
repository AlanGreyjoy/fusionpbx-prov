const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCallCenterTiers', {
    call_center_tier_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    call_center_queue_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    call_center_agent_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    agent_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    queue_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tier_level: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tier_position: {
      type: DataTypes.DECIMAL,
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
    tableName: 'v_call_center_tiers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_call_center_tiers_pkey",
        unique: true,
        fields: [
          { name: "call_center_tier_uuid" },
        ]
      },
    ]
  });
};
