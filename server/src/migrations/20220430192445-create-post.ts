'use strict';
module.exports = {
  async up(queryInterface:any, Sequelize:any) {
    await queryInterface.createTable('post', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      creator: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },
  async down(queryInterface:any, Sequelize:any) {
    await queryInterface.dropTable('post');
  }
};