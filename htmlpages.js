const path = require('path');
const express = require('express');
const app = express();

const publicFolder = path.join(__dirname, 'public');
// app.use(express.static(publicFolder));
// app.listen(5000);
// remove html extension just comment  app.use(express.static(publicFolder)); this line
// app.set('view engin','ejs');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');
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
app.get('/profile', (req, res) => {
    const user ={
        name:'jack sparrow',
        email:'jacl@gmail.com',
        desig:'softwaer dev'
    }
    res.render('profile',{user})
});
app.get('*', (req, res) => {
    res.sendFile(`${publicFolder}/notfound.html`)
})
app.listen(5000);   