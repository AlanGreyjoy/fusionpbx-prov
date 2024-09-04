const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEventGuardLogs', {
    event_guard_log_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    hostname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    log_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    filter: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    log_status: {
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
    tableName: 'v_event_guard_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_event_guard_logs_pkey",
        unique: true,
        fields: [
          { name: "event_guard_log_uuid" },
        ]
      },
    ]
  });
};
