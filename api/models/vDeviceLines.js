const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDeviceLines', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    device_line_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    device_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    line_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    server_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    server_address_primary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    server_address_secondary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outbound_proxy_primary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outbound_proxy_secondary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    display_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    auth_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_port: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sip_transport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    register_expires: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    shared_line: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
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
    tableName: 'v_device_lines',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_device_lines_pkey",
        unique: true,
        fields: [
          { name: "device_line_uuid" },
        ]
      },
    ]
  });
};
