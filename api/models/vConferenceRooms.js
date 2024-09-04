const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceRooms', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_room_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    conference_center_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_room_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    record: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    moderator_pin: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    participant_pin: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    max_members: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    start_datetime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stop_datetime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wait_mod: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    moderator_endconf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    announce_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    announce_count: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    announce_recording: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sounds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mute: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    account_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
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
    tableName: 'v_conference_rooms',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_rooms_pkey",
        unique: true,
        fields: [
          { name: "conference_room_uuid" },
        ]
      },
    ]
  });
};
