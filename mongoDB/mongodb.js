// const { MongoClient } = require('mongodb');
// // const MongoClient =require('mongodb').MongoClient; // both are same

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// // Database Name
// const dbName = 'firstDB';
// async function dbConnection() {
//   // Use connect method to connect to the server
//   const connection = await client.connect();
//   const db = connection.db(dbName);
//   return db.collection('practice');
//   // const response = await collection.find({}).toArray()
//   // console.log(response);
// }



const dbConnection = require('../Modules/mongoConfig')
// handle using promise 
dbConnection().then((res) => {
  res.find({name:'6600'}).toArray().then((data) => {
    console.log(data);
  })
})


const main =async ()=>{
  let  data =await dbConnection();
  data =await data.find().toArray();
  console.log(data);

}
main()