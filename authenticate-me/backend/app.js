//imported packages
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const routes = require('./routes');

//isProduction will be true if env is in production
// by checking config file (backend/config/index.js)

const { environment } = require('./config');
const isProduction = environment === 'production';

//initialize Express app
const app = express();

//Connect the morgan middleware for logging information about requests and responses:
app.use(morgan('dev'));

//middleware for parsing cookies/JSON bodies of requests
app.use(cookieParser());
app.use(express.json());

// Security Middleware
if (!isProduction) {
    // enable cors only in development
    app.use(cors());
}

// helmet helps set a variety of headers to better secure your app
app.use(
    helmet.crossOriginResourcePolicy({
        policy: "cross-origin"
    })
);

// Set the _csrf token and create req.csrfToken method
app.use(
    csurf({
        cookie: {
            secure: isProduction,
            sameSite: isProduction && "Lax",
            httpOnly: true
        }
    })
);

// Connect all the routes
app.use(routes);



module.exports = app;