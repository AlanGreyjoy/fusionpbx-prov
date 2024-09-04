const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VIvrMenus', {
    ivr_menu_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ivr_menu_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_parent_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ivr_menu_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_dialect: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_voice: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_greet_long: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_greet_short: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_invalid_sound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_exit_sound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_pin_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_confirm_macro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_confirm_key: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_tts_engine: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_tts_voice: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_confirm_attempts: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_exit_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_exit_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_inter_digit_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_max_failures: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_max_timeouts: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_digit_len: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ivr_menu_direct_dial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_ringback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_cid_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ivr_menu_description: {
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
    tableName: 'v_ivr_menus',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_ivr_menus_pkey",
        unique: true,
        fields: [
          { name: "ivr_menu_uuid" },
        ]
      },
    ]
  });
};
