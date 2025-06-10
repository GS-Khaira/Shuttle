const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const sequelize = require('./util/database');
const User = require('./models/user');
const Ride = require('./models/rides');

User.hasMany(Ride, { foreignKey: 'driver_id' });
Ride.belongsTo(User, { foreignKey: 'driver_id' });

app.use(cors());
app.use(express.json());

sequelize.authenticate()
    .then(() => {
        console.log('Database connection established successfully.');
        return sequelize.sync({ alter: true });
    })
    .then(() => {
        console.log('Database synced successfully');
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:3000`);
        });
    })
    .catch(err => {
        console.error('Database error:', err);
    });

app.get('/', (req, res) => {
  res.send('Backend is running!');
});