const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceCenters', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_center_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_center_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_center_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_center_pin_length: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    conference_center_greeting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_center_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_center_enabled: {
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
    tableName: 'v_conference_centers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_centers_pkey",
        unique: true,
        fields: [
          { name: "conference_center_uuid" },
        ]
      },
    ]
  });
};
