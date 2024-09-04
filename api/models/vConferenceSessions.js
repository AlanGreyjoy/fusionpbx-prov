const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceSessions', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_session_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    meeting_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recording: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    start_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    end_epoch: {
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
    tableName: 'v_conference_sessions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_sessions_pkey",
        unique: true,
        fields: [
          { name: "conference_session_uuid" },
        ]
      },
    ]
  });
};
