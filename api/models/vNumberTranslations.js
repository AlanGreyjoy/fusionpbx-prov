const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VNumberTranslations', {
    number_translation_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    number_translation_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_translation_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number_translation_description: {
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
    tableName: 'v_number_translations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_number_translations_pkey",
        unique: true,
        fields: [
          { name: "number_translation_uuid" },
        ]
      },
    ]
  });
};
