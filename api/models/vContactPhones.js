const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactPhones', {
    contact_phone_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    contact_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    phone_label: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_type_voice: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phone_type_fax: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phone_type_video: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phone_type_text: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phone_speed_dial: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_country_code: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_extension: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone_primary: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    phone_description: {
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
    tableName: 'v_contact_phones',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_phones_pkey",
        unique: true,
        fields: [
          { name: "contact_phone_uuid" },
        ]
      },
    ]
  });
};
