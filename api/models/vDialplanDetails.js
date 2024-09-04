const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDialplanDetails', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dialplan_detail_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dialplan_detail_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_detail_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_detail_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_detail_break: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_detail_inline: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dialplan_detail_group: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dialplan_detail_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dialplan_detail_enabled: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'v_dialplan_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_dialplan_details_pkey",
        unique: true,
        fields: [
          { name: "dialplan_detail_uuid" },
        ]
      },
    ]
  });
};
