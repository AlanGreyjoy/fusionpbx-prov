const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VVoicemailDestinations', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_destination_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    voicemail_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    voicemail_uuid_copy: {
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
    tableName: 'v_voicemail_destinations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_voicemail_destinations_pkey",
        unique: true,
        fields: [
          { name: "voicemail_destination_uuid" },
        ]
      },
    ]
  });
};
