const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDialplans', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    app_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    hostname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_continue: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_xml: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dialplan_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_description: {
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
    tableName: 'v_dialplans',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_dialplans_pkey",
        unique: true,
        fields: [
          { name: "dialplan_uuid" },
        ]
      },
    ]
  });
};
