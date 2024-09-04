const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFaxLogs', {
    fax_log_uuid: {
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
    fax_success: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_result_code: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_result_text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_file: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_ecm_used: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_local_station_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_document_transferred_pages: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_document_total_pages: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_image_resolution: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_image_size: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_bad_rows: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_transfer_rate: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_retry_attempts: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_retry_limit: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_retry_sleep: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_uri: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_duration: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fax_epoch: {
      type: DataTypes.DECIMAL,
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
    tableName: 'v_fax_logs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_fax_logs_pkey",
        unique: true,
        fields: [
          { name: "fax_log_uuid" },
        ]
      },
    ]
  });
};
