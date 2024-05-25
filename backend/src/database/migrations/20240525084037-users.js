'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                unique: true,
                primaryKey: true
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false
            }
        }, {
            hooks: {
                beforeCreate: function (person, options, fn) {
                    person.createdAt = new Date();
                    person.updatedAt = new Date();
                    fn(null, person);
                },
                beforeUpdate: function (person, options, fn) {
                    person.updatedAt = new Date();
                    fn(null, person);
                }
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await Sequelize.dropTable('users');
    }
};
