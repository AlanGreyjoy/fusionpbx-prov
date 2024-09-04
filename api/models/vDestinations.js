const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VDestinations', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    destination_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    dialplan_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    fax_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    user_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    group_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    destination_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_trunk_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_area_code: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_condition_field: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_number_regex: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_caller_id_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_caller_id_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_cid_name_prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_context: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_record: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_hold_music: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_distinctive_ring: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_accountcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_type_voice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_type_fax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_type_emergency: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_type_text: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_conditions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    destination_actions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    destination_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_alternate_app: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_alternate_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_order: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_description: {
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
    tableName: 'v_destinations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_destinations_pkey",
        unique: true,
        fields: [
          { name: "destination_uuid" },
        ]
      },
    ]
  });
};
