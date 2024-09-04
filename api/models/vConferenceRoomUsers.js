const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceRoomUsers', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_room_user_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    conference_room_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    user_uuid: {
      type: DataTypes.UUID,
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
    tableName: 'v_conference_room_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_room_users_pkey",
        unique: true,
        fields: [
          { name: "conference_room_user_uuid" },
        ]
      },
    ]
  });
};
