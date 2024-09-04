const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDatabaseTransactions', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    database_transaction_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    app_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    app_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    transaction_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transaction_address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transaction_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    transaction_old: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transaction_new: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transaction_result: {
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
    tableName: 'v_database_transactions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_database_transactions_pkey",
        unique: true,
        fields: [
          { name: "database_transaction_uuid" },
        ]
      },
    ]
  });
};
