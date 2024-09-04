const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDashboard', {
    dashboard_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dashboard_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dashboard_path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dashboard_column_span: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dashboard_details_state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dashboard_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dashboard_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dashboard_description: {
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
    tableName: 'v_dashboard',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_dashboard_pkey",
        unique: true,
        fields: [
          { name: "dashboard_uuid" },
        ]
      },
    ]
  });
};
