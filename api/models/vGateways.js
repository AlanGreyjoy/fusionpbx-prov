const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VGateways', {
    gateway_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    gateway: {
      type: DataTypes.TEXT,
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
    distinct_to: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    auth_username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    realm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    from_user: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    from_domain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    proxy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    register_proxy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    outbound_proxy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expire_seconds: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    register: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    register_transport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    retry_seconds: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ping: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ping_min: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ping_max: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_in_ping: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    caller_id_in_from: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    supress_cng: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sip_cid_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codec_prefs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    channels: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    extension_in_contact: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hostname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
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
    tableName: 'v_gateways',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_gateways_pkey",
        unique: true,
        fields: [
          { name: "gateway_uuid" },
        ]
      },
    ]
  });
};
