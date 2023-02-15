const dbConnection = require('../Modules/mongoConfig')

const dbInsert = async () => {
    const data = await dbConnection();
    // delet one onye 

    // const result = await data.deleteOne(
    //         { name: 'jack 2'}
    // )

    // delet many
    const result = await data.deleteMany(
        { name: 'jack 4'}
)
    if (result.acknowledged) {
        console.log(result);
    }

}
dbInsert();