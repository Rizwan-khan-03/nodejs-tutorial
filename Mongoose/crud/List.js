const Practice = require('../Practice');

module.exports = async function(req, resp) {
    let data = await Practice.find();
    console.log(data);
    resp.send(data);
}
