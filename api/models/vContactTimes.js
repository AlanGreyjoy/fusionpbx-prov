const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactTimes', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_time_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    contact_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    time_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_stop: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time_description: {
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
    tableName: 'v_contact_times',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_times_pkey",
        unique: true,
        fields: [
          { name: "contact_time_uuid" },
        ]
      },
    ]
  });
};
