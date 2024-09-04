const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFaxFiles', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_file_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    fax_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_mode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_file_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax_file_path: {
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
    fax_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fax_epoch: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fax_base64: {
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
    tableName: 'v_fax_files',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_fax_files_pkey",
        unique: true,
        fields: [
          { name: "fax_file_uuid" },
        ]
      },
    ]
  });
};
