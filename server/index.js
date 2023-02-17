const express = require('express');
const dbConnect = require('../models/dbConnect');
const routes = require('./routes');
const path = require('path');
const app = express();
const port = 3000;
const projectPath = path.join(__dirname, '..');
dbConnect().then(() => console.log('Connected to MongoDB'));

app.use(express.json());
app.use(express.static(path.join(projectPath, 'public')));

app.get('/', function (req, res) {
  console.log(path.join(projectPath, 'public', 'index.html'));
  res.sendFile(path.join(projectPath, 'public', 'index.html'));
});

app.use('/words', routes.words);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});