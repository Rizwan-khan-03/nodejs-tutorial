const path = require('path');
const express = require('express');
const app = express();

const publicFolder = path.join(__dirname, 'public');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const reqFilter =require('./Modules/middlewaer');
const route =express.Router();

// const reqFilter =(req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please Provid Age')
//     }else if(req.query.age <18){
//         res.send('bache ho tum')
            
        
//     }
//     else {
//         next()
//     }

// }
//  app.use(reqFilter) // this middelwaer work for all


// app.get('', (req, res) => {
//     res.sendFile(`${publicFolder}/index.html`)
// });
// app.get('/about', (req, res) => {
//     res.sendFile(`${publicFolder}/about.html`)
// });
// app.get('/help', (req, res) => {
//     res.sendFile(`${publicFolder}/help.html`)
// });

// app.get('*', (req, res) => {
//     res.sendFile(`${publicFolder}/notfound.html`)
// })
// app.listen(5000);   


/// Rout level middelwaer

app.get('', (req, res) => {
    res.sendFile(`${publicFolder}/index.html`)
});
app.get('/about',(req, res) => {
    res.sendFile(`${publicFolder}/about.html`)
});
app.get('/help', (req, res) => {
    res.sendFile(`${publicFolder}/help.html`)
});



// jispe route level middelwaer lagana ho usipe laga saktey hai

route.use(reqFilter)
route.get('/login', (req, res) => {
    res.sendFile(`${publicFolder}/about.html`)
});
route.get('/signup', (req, res) => {
    res.sendFile(`${publicFolder}/help.html`)
});
app.use('/',route)

app.get('*', (req, res) => {
    res.sendFile(`${publicFolder}/notfound.html`)
})
app.listen(5000); 