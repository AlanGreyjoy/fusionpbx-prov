const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VSipProfiles', {
    sip_profile_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sip_profile_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_profile_hostname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_profile_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_profile_description: {
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
    tableName: 'v_sip_profiles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_sip_profiles_pkey",
        unique: true,
        fields: [
          { name: "sip_profile_uuid" },
        ]
      },
    ]
  });
};
