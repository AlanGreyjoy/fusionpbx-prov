const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('VEmailTemplates', {
    email_template_uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    domain_uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    template_language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_subcategory: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_subject: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_enabled: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    template_description: {
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
    tableName: 'v_email_templates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "v_email_templates_pkey",
        unique: true,
        fields: [
          { name: "email_template_uuid" },
        ]
      },
    ]
  });
};
