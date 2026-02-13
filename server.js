require('dotenv').config();
const express = require('express');
require('./scheduler/birthdayScheduler');
const app = express();


app.use(express.json());

// routes
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
