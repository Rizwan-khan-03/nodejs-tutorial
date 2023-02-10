
const http = require('http');
const data = require('./data')
const fs = require('fs');
const path = require('path');
// 1)

// const http =require('http');
// http.createServer((req,res)=>{
//     res.write("hello nod");
//     res.end()
// }).listen(4500)

// 2) 

function firstServer(req, res) {
    res.write('hello node again');
    res.end()
}

http.createServer(firstServer).listen(4500)
const color = require('colors')
// console.log('hello color'.yellow);

// const firstApi = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\jason' });
//     res.write(JSON.stringify({name:'rizwan',pass:123456}));
//     res.end('ok');
//   }).listen(5000);

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\jason' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);


// creating file by loop

const folderPath = path.join(__dirname ,'files')
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${folderPath}/hello.txt${i}`,"a simple text file")
// }
// fs.readdir(folderPath,(err,files)=>{
//     files.forEach(item=>console.log('item',item))

// })
//// crud

const crudPath=path.join(__dirname , "crud");
const filePath=`${crudPath}/text.txt`
// crud operation
// 1) create file

// fs.writeFileSync(filePath,"crud creat file")

//2) Read file

// fs.readFile(filePath,(err,item)=>{
//     console.log('item',item)
// })   /// buffer will come here without using third parameter



// fs.readFile(filePath, "utf8" ,(err,item)=>{
//     console.log('item',item)
// })  

// 3) Update file
// fs.appendFile(filePath ,"my name is jack",(err)=> !err?console.log('file is update'):'')