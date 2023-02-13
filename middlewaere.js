const path = require('path');
const express = require('express');
const app = express();

const publicFolder = path.join(__dirname, 'public');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicFolder}/index.html`)
});
app.get('/about', (req, res) => {
    res.sendFile(`${publicFolder}/about.html`)
});
app.get('/help', (req, res) => {
    res.sendFile(`${publicFolder}/help.html`)
});

app.get('*', (req, res) => {
    res.sendFile(`${publicFolder}/notfound.html`)
})
app.listen(5000);   