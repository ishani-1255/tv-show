const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const episodeRoutes = require('./routes/episodes');
const commentRoutes = require('./routes/comments');
const castRoutes = require('./routes/cast');

require('dotenv').config();

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/episodes', episodeRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/cast', castRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
