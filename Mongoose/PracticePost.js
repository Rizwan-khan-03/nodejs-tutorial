const express = require('express');
const app = express();
app.use(express.json())
require("./Config")
const Practice = require('./Practice');

app.post('/create', async (req, resp) => {
    let data = new Practice(req.body);
    let result= await data.save()
    console.log(result);
    resp.send(result)
})
app.listen(5000)