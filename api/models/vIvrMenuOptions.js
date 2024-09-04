const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VIvrMenuOptions', {
    ivr_menu_option_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    ivr_menu_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ivr_menu_option_digits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_option_action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_option_param: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_option_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_option_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_option_enabled: {
      type: DataTypes.BOOLEAN,
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
    tableName: 'v_ivr_menu_options',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_ivr_menu_options_pkey",
        unique: true,
        fields: [
          { name: "ivr_menu_option_uuid" },
        ]
      },
    ]
  });
};
