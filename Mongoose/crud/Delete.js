const Practice = require('../Practice');

module.exports = async function(req, resp) {
    let data = await Practice.deleteOne(req.params);
    console.log(req.params);
    resp.send(data);
}
