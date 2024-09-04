const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VPhraseDetails', {
    phrase_detail_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    phrase_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    phrase_detail_group: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phrase_detail_tag: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_detail_pattern: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_detail_function: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_detail_data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_detail_method: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_detail_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_detail_order: {
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
    tableName: 'v_phrase_details',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_phrase_details_pkey",
        unique: true,
        fields: [
          { name: "phrase_detail_uuid" },
        ]
      },
    ]
  });
};
