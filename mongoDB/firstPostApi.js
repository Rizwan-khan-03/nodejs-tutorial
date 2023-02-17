const express = require('express');
const app = express();
const dbConnection = require('../Modules/mongoConfig')
app.use(express.json())

app.post('/', async (req, resp) => {
    let data = await dbConnection();
    let result = await data.insertMany(req.body)
    resp.send(result)
})
app.listen(4000)