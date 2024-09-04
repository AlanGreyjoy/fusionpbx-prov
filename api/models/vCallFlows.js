const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCallFlows', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    call_flow_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    call_flow_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_feature_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_pin_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_sound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_alternate_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_alternate_sound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_alternate_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_alternate_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_flow_description: {
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
    tableName: 'v_call_flows',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_call_flows_pkey",
        unique: true,
        fields: [
          { name: "call_flow_uuid" },
        ]
      },
    ]
  });
};
