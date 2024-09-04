const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VNotifications', {
    notification_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    project_notifications: {
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
    tableName: 'v_notifications',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_notifications_pkey",
        unique: true,
        fields: [
          { name: "notification_uuid" },
        ]
      },
    ]
  });
};
