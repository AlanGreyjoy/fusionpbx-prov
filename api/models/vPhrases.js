const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VPhrases', {
    phrase_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    phrase_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phrase_description: {
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
    tableName: 'v_phrases',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_phrases_pkey",
        unique: true,
        fields: [
          { name: "phrase_uuid" },
        ]
      },
    ]
  });
};
