const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VCallBlock', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    call_block_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    call_block_direction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    extension_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    call_block_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_block_country_code: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    call_block_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_block_count: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    call_block_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_block_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_block_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_added: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_block_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    call_block_description: {
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
    tableName: 'v_call_block',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_call_block_pkey",
        unique: true,
        fields: [
          { name: "call_block_uuid" },
        ]
      },
    ]
  });
};
