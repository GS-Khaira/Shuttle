const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const db = require('./util/database');

app.use(cors());
app.use(express.json());

db.execute('Select * FROM users')
.then(result => {
    console.log(result);
})
.catch(
    err =>{
        console.log(err);
    }
);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});