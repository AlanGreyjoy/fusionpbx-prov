const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceProfileParams', {
    conference_profile_param_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    conference_profile_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    profile_param_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_param_value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_param_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_param_description: {
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
    tableName: 'v_conference_profile_params',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_profile_params_pkey",
        unique: true,
        fields: [
          { name: "conference_profile_param_uuid" },
        ]
      },
    ]
  });
};
