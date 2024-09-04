const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferenceProfiles', {
    conference_profile_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    profile_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile_description: {
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
    tableName: 'v_conference_profiles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conference_profiles_pkey",
        unique: true,
        fields: [
          { name: "conference_profile_uuid" },
        ]
      },
    ]
  });
};
