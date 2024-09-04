const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFax', {
    fax_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_destination_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_host: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_port: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_security: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_validate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_username: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_connection_mailbox: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_inbound_subject_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_outbound_subject_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_outbound_authorized_senders: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_pin_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_toll_allow: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_forward_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_send_channels: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    accountcode: {
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
    tableName: 'v_fax',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_fax_pkey",
        unique: true,
        fields: [
          { name: "fax_uuid" },
        ]
      },
    ]
  });
};
