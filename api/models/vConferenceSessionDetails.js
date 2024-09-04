const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceSessionDetails', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_session_detail_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    conference_session_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    meeting_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    username: {
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
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    moderator: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    network_addr: {
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
    tableName: 'v_conference_session_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_session_details_pkey",
        unique: true,
        fields: [
          { name: "conference_session_detail_uuid" },
        ]
      },
    ]
  });
};
