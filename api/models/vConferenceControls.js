const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceControls', {
    conference_control_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    control_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    control_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    control_description: {
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
    tableName: 'v_conference_controls',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_controls_pkey",
        unique: true,
        fields: [
          { name: "conference_control_uuid" },
        ]
      },
    ]
  });
};
