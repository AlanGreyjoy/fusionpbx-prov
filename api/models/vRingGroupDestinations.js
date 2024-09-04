const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VRingGroupDestinations', {
    ring_group_destination_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    ring_group_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    destination_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    destination_delay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    destination_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    destination_prompt: {
      type: DataTypes.DECIMAL,
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
    tableName: 'v_ring_group_destinations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_ring_group_destinations_pkey",
        unique: true,
        fields: [
          { name: "ring_group_destination_uuid" },
        ]
      },
    ]
  });
};
