const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDashboardGroups', {
    dashboard_group_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dashboard_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    group_uuid: {
      type: DataTypes.UUID,
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
    tableName: 'v_dashboard_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_dashboard_groups_pkey",
        unique: true,
        fields: [
          { name: "dashboard_group_uuid" },
        ]
      },
    ]
  });
};
