const express = require('express');
const app = express();
const mongodb =require('mongodb')
const dbConnection = require('../Modules/mongoConfig')
app.use(express.json())

// get   ** read
app.get('/', async (req, resp) => {
    let data = await dbConnection();
    data = await data.find().toArray()
    resp.send(data)
})

// post from postman  ** insert
app.post('/', async (req, resp) => {
    let data = await dbConnection();
    let result = await data.insertOne(req.body)
    resp.send(result)
})

// update  from postman
app.put('/', async (req, resp) => {
    //update from postman
    let data = await dbConnection();
    let result = await data.updateOne(
        // "stati update"
        // {name:"f23"},
        // {$set:req.body}
        // "dynamic update"
        { name: req.body.name },
        { $set: req.body }
    )
    // console.log(req.body);
    resp.send({ result: "update" })
})
// update  from postman
app.put('/:name', async (req, resp) => {
    //update from postman using param 
    let data = await dbConnection();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    // console.log(req.body);
    resp.send({ result: "update" })
})
// delete from postman //delete
app.delete('/:id', async (req, resp) => {
    //update from postman using param 
    let data = await dbConnection();
    let result = await data.deleteOne(
       {_id: new mongodb.ObjectId(req.params.id)}
    )
    resp.send(result)
})
app.listen(5000)