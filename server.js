const express = require("express");

require('dotenv').config();


const PORT = process.env.PORT || 8080;

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, '/public')));

app.use (express.urlencoded({extended: true}));

app.use(express.json());

const exphbs = require('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

const router = require('./controllers/burgers_controller.js');

const routes = router.router;

app.use(routes);

// Import routes and give server access.

app.listen(PORT, () => console.log(`App now listening at ${PORT}`));









