const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VLanguages', {
    language_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code: {
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
    tableName: 'v_languages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_languages_pkey",
        unique: true,
        fields: [
          { name: "language_uuid" },
        ]
      },
    ]
  });
};
