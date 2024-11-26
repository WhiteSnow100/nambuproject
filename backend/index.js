const express = require('express');
const userRoutes = require('./routes/userRoutes');
const dictionaryRoutes = require('./routes/dictionaryRoutes');
const loginRoutes = require('./routes/loginRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/dictionary', dictionaryRoutes);
app.use('/api/login', loginRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

