const express =require('express');
const app =express();

app.get('',(req,res)=>{
    res.send('welcome to home page')
});
app.get('/about',(req,res)=>{
    res.send('welcome to about page')
})
app.get('/contact',(req,res)=>{
    res.send('welcome to contact us page')
})
app.listen(4200)