const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEmergencyLogs', {
    emergency_log_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    extension: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    event: {
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
    tableName: 'v_emergency_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_emergency_logs_pkey",
        unique: true,
        fields: [
          { name: "emergency_log_uuid" },
        ]
      },
    ]
  });
};
