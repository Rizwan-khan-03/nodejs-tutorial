const express =require('express');
const app =express();

// app.get('',(req,res)=>{
//     // req from browser url http://localhost:4200/?name=rizwan
//     // name = "rizwan"
//     console.log('data sent by browser >>>>',req.query);
//     res.send('welcome to home page')
// });
// app.get('/about',(req,res)=>{
//     res.send('welcome to about page')
// })
// app.get('/contact',(req,res)=>{
//     res.send('welcome to contact us page')
// })
// app.listen(4200)

// request ==>>always send by clients side   and
// response ==> always send by server

// Render HTML and JSON data


app.get('',(req,res)=>{
    // render html
    res.send(`<h1>welcome to home </h1> <a href='/about'>Go to About page</a>`)
});
app.get('/about',(req,res)=>{
    // render json
    res.send(`<h1>welcome to about </h1>
    <input type="text" value="${req.query.name}"></input>
    <button>submit</button>
     <a href='/'>Go to home page</a>`)
})
app.get('/help',(req,res)=>{
    res.send([
        {
            name:'rizwan',
            email:'jack@gmail.com'
        },
        {
            name:'rizwan',
            email:'jack@gmail.com'
        }
    ])
})
app.listen(4200)