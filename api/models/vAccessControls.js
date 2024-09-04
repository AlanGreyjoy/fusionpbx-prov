const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VAccessControls', {
    access_control_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    access_control_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    access_control_default: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    access_control_description: {
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
    tableName: 'v_access_controls',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_access_controls_pkey",
        unique: true,
        fields: [
          { name: "access_control_uuid" },
        ]
      },
    ]
  });
};
