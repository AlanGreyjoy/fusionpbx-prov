const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VUsers', {
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    salt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    api_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_totp_secret: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    add_user: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    add_date: {
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
    tableName: 'v_users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_users_pkey",
        unique: true,
        fields: [
          { name: "user_uuid" },
        ]
      },
    ]
  });
};
