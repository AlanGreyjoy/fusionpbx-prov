const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCallBroadcasts', {
    call_broadcast_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    broadcast_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_start_time: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    broadcast_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    broadcast_concurrent_limit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    recording_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    broadcast_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_destination_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_phone_numbers: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_avmd: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_destination_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_accountcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    broadcast_toll_allow: {
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
    tableName: 'v_call_broadcasts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_call_broadcasts_pkey",
        unique: true,
        fields: [
          { name: "call_broadcast_uuid" },
        ]
      },
    ]
  });
};
