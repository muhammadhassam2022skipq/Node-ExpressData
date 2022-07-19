const express = require('express');

const fs = require('fs');

const path = require('path');

const adminRoutes = require('./routes/admin-routes');
const shoppingRoutes = require('./routes/shopping-routes');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shopping', shoppingRoutes);

app.use('/home', (req, res, next) => {
    const homeHtmlPath = path.join(__dirname, 'views', 'home.html');
    res.sendFile(homeHtmlPath);
});

app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
    next();
})

app.listen(5000, () => {
    console.log('Started listening at port 5000');
});