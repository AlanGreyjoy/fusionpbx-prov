const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VConferences', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    conference_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_pin_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_email_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_account_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_flags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    conference_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    conference_enabled: {
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
    tableName: 'v_conferences',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_conferences_pkey",
        unique: true,
        fields: [
          { name: "conference_uuid" },
        ]
      },
    ]
  });
};
