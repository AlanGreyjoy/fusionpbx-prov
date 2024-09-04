const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFaxQueue', {
    fax_queue_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    origination_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_log_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hostname: {
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
    fax_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_email_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_retry_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fax_notify_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fax_notify_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fax_retry_count: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_accountcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_command: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_response: {
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
    tableName: 'v_fax_queue',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_fax_queue_pkey",
        unique: true,
        fields: [
          { name: "fax_queue_uuid" },
        ]
      },
    ]
  });
};
