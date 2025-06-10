const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Ride = sequelize.define('ride', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    from_location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    to_location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    ride_date: {
        type: Sequelize.DATEONLY, // Only date, no time
        allowNull: false,
        validate: {
            isDate: true,
            isAfter: new Date().toISOString().split('T')[0] // Must be today or future
        }
    },
    ride_time: {
        type: Sequelize.TIME, // Only time
        allowNull: false
    },
    luggage_accepted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    redirection_allowed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    price_per_seat: {
        type: Sequelize.DECIMAL(10, 2), // Allows decimal prices like 25.50
        allowNull: false,
        validate: {
            min: 0,
            isDecimal: true
        }
    },
    comments: {
        type: Sequelize.TEXT, // TEXT for longer comments
        allowNull: true // Optional field
    },
    driver_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'users', // References the users table
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    available_seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1,
            max: 8 // Reasonable limit for car seats
        }
    },
    status: {
        type: Sequelize.ENUM('active', 'completed', 'cancelled'),
        allowNull: false,
        defaultValue: 'active'
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: true, // Automatically manages createdAt and updatedAt
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    tableName: 'rides'
});

module.exports = Ride;