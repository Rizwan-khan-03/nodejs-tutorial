const dbConnection = require('../Modules/mongoConfig')

const dbInsert = async () => {
    const data = await dbConnection();
    const result = await data.insertMany(
        [
            { name: 'jack 1', brand: "vivo", price: '1400', category: 'mobile' },
            { name: 'jack 2', brand: "vivo", price: '1500', category: 'mobile' },
            { name: 'jack 3', brand: "vivo", price: '1600', category: 'mobile' },
            { name: 'jack 4', brand: "vivo", price: '1700', category: 'mobile' }
        ]
    )
    if (result.acknowledged) {
        console.log(result);
    }

}
dbInsert();