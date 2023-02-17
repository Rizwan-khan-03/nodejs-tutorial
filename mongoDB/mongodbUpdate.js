const dbConnection = require('../Modules/mongoConfig')

const dbInsert = async () => {
    const data = await dbConnection();
    // update one onye 
    // const result = await data.updateOne(
    //         { name: 'jack 1'},{$set:{ name: 'jack sparrow',},}
    // )
    // update many
    const result = await data.updateMany(
        { name: 'captain jack sparrow '},{$set:{ name: 'jack sparrow ',},}
)
    if (result.acknowledged) {
        console.log(result);
    }

}
dbInsert();