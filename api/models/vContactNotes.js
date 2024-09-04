const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VContactNotes', {
    contact_note_uuid: {
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
    contact_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_mod_date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_mod_user: {
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
    tableName: 'v_contact_notes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_contact_notes_pkey",
        unique: true,
        fields: [
          { name: "contact_note_uuid" },
        ]
      },
    ]
  });
};
