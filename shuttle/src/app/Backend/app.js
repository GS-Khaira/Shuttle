const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'GSKHAIRA@1005g',
  database: 'shuttle'
});

const sequelize = require('./util/database');

const User = require('./models/user');
const Ride = require('./models/rides');

const authRoutes = require('./Routes/auth');

User.hasMany(Ride, { foreignKey: 'driver_id' });
Ride.belongsTo(User, { foreignKey: 'driver_id' });

app.use(cors({
  origin: 'http://localhost:4200', // your Angular frontend
  credentials: true
}));

app.use(express.json());

app.use(session({
  key: 'session_cookie_name',
  secret: 'your_secret_key',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true in production with HTTPS
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

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

app.use(authRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});