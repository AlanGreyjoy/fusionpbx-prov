const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VRecordings', {
    recording_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    recording_filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recording_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recording_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recording_base64: {
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
    tableName: 'v_recordings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_recordings_pkey",
        unique: true,
        fields: [
          { name: "recording_uuid" },
        ]
      },
    ]
  });
};
