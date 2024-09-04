const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VStreams', {
    stream_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    stream_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stream_location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stream_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    stream_description: {
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
    tableName: 'v_streams',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_streams_pkey",
        unique: true,
        fields: [
          { name: "stream_uuid" },
        ]
      },
    ]
  });
};
