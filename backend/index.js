const express = require('express');
const app = express();
const port = 3000
var cors = require('cors');
var route = require('./route');
require('./database');

app.use(cors())
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/prueba', route);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});