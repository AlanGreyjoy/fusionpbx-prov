const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VModules', {
    module_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    module_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    module_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    module_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    module_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    module_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    module_default_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    module_description: {
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
    tableName: 'v_modules',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_modules_pkey",
        unique: true,
        fields: [
          { name: "module_uuid" },
        ]
      },
    ]
  });
};
