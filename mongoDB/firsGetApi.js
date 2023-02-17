const express =require('express');
const app =express();
const dbConnection =require('../Modules/mongoConfig')
app.use(express.json())

app.get('/', async(req,resp)=>{
    let data =await dbConnection();
    data=await data.find().toArray()
    resp.send(data)
})

app.post('/', async (req, resp) => {
    let data = await dbConnection();
    let result = await data.insertOne(req.body)
    resp.send(result)
})
app.listen(5000)