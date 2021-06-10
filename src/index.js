const express = require('express');
const exphbs = require('express-handlebars');
const route = require('./routes');
const path = require('path');
const morgan = require('morgan');
const { Console } = require('console');
const app = express();
const db = require('./config/db');
const methodOverride = require('method-override');
const http = require('http')
const hostname = 'localhost';
const port = process.env.PORT || 3000;

// Create HTTP Server (Not neccessary)
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/html')
})
// Connect to DB
db.connect();

//Static
app.use(express.static(path.join(__dirname, 'public')));

// Using middle-ware for post method (HTML and JS File)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method override
app.use(methodOverride('_method'));

// HTML Logger
app.use(morgan('combined'));

// Template Handlebars
app.engine(
    'hbs',
    exphbs({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://${hostname}:${port}`);
});
