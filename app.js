const express = require('express');
const homeController = require('./controllers/homeController');
const app = express();
const port = 3000;

/* Enable EJS */
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs")

/* Enable file access */
app.use(express.static('public'));

/* Routes */
app.get('/', (req, res) => {
  res.render('index.html');
});

/* Route EJS template to handle multiple planets */
app.get('/planet/:planet', homeController.respondWithPlanet);

/* Start server */
app.listen(process.env.PORT, process.env.IP, function() {
  console.log('Running express server');
});