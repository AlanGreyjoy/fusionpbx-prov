const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFollowMe', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    follow_me_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    cid_name_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cid_number_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dial_string: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    follow_me_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    follow_me_ignore_busy: {
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
    tableName: 'v_follow_me',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_follow_me_pkey",
        unique: true,
        fields: [
          { name: "follow_me_uuid" },
        ]
      },
    ]
  });
};
