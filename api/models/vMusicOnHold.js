const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VMusicOnHold', {
    music_on_hold_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    music_on_hold_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    music_on_hold_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    music_on_hold_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    music_on_hold_shuffle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    music_on_hold_channels: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    music_on_hold_interval: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    music_on_hold_timer_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    music_on_hold_chime_list: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    music_on_hold_chime_freq: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    music_on_hold_chime_max: {
      type: DataTypes.DECIMAL,
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
    tableName: 'v_music_on_hold',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_music_on_hold_pkey",
        unique: true,
        fields: [
          { name: "music_on_hold_uuid" },
        ]
      },
    ]
  });
};
