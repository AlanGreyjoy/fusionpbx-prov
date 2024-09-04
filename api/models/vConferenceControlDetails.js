const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceControlDetails', {
    conference_control_detail_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    conference_control_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    control_digits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    control_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    control_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    control_enabled: {
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
    tableName: 'v_conference_control_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_control_details_pkey",
        unique: true,
        fields: [
          { name: "conference_control_detail_uuid" },
        ]
      },
    ]
  });
};
