const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const publicDirectory = path.join(__dirname, '../public');
app.set('view engine', 'hbs');
app.use(express.static(publicDirectory));
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.get('/', (req, res) => {
    res.render('index', {
        title: "Welcome1",
        name: "Welcome"
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/help', (req, res) => {
    res.render('help', {
        title: "Welcome1",
        name: "Welcome"
    });
});
app.get('/help/*', (req, res) => {
    res.render('help', {
        title: "Welcome1",
        name: "Welcome"
    });
});
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send({
            error: "Please enter address"
        })
    }

    res.send('Weather');
})
app.get('*', (req, res) => {
    res.render('404', {
        title: 'Not Found',
        name: 'Not Found'
    })
})
app.listen(3000, () => {
    console.log('listening on 3000');
});