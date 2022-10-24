require('dotenv').config()
const express = require('express')
const cors = require('cors')

const hourly = require('./routes/hourly')
const daily = require('./routes/daily')

const app = express()

app.use(cors());
app.use(express.json());

// routes
app.use('/api/hourly', hourly);
app.use('/api/daily', daily);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
