const express = require('express');
const app = express();
app.use(express.json())
require("../Config")
const create = require('./Creat');
const list = require('./List');
const del = require('./Delete');
const update = require('./Update');
const search = require('./Search')
const upload =require('./Upload')
const PORT = 5000;

app.post('/create', create)
app.get('/list', list);
app.delete('/delete/:_id', del);
app.put('/update/:_id', update);
app.get('/search/:key', search)
app.post('/upload',upload,(req,res)=>{
    res.send("file upload");
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
