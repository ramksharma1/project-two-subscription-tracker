// Creates packages that are required for project
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Creates sequelize connection
const sequelize = require('./config/connection.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Uses express
const app = express();
const PORT = process.env.PORT || 3002;

// Creates session that lasts 10 minuites
const sess = {
    secret: 'Super secret secret',
    cookie: {
        maxAge: 600000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    })
}

app.use(session(sess));

// Uses helper that uses authorization
const hbs = exphbs.create({ helpers });

// Sets viewing engine to handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Public')));
// App uses routes
app.use(routes);

// Listens for server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening at http://localhost:' + PORT));
})