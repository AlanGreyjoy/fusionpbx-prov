const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VFollowMeDestinations', {
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    follow_me_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    follow_me_destination_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    follow_me_destination: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    follow_me_delay: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    follow_me_timeout: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    follow_me_prompt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    follow_me_order: {
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
    tableName: 'v_follow_me_destinations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_follow_me_destinations_pkey",
        unique: true,
        fields: [
          { name: "follow_me_destination_uuid" },
        ]
      },
    ]
  });
};
