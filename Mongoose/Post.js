const express = require('express');
const app = express();
app.use(express.json())
require("./Config")
const Practice = require('./Practice');
const PORT = 5000;

app.post('/create', async (req, resp) => {
    let data = new Practice(req.body);
    let result = await data.save()
    console.log(result);
    resp.send(result)
})
app.get('/list', async (req, resp) => {
    let data = await Practice.find();
    console.log(data);
    resp.send(data);
});
app.delete('/delete/:_id', async (req, resp) => {
    let data = await Practice.deleteOne(req.params);
    console.log(req.params);
    resp.send(data);
});
app.put('/update/:_id', async (req, resp) => {
    let data = await Practice.updateOne(req.params,{$set:req.body});
    console.log(req.params);
    resp.send(data);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});