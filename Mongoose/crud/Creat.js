const Practice = require('../Practice');
module.exports = async function(req, resp) {
    let data = new Practice(req.body);
    let result = await data.save()
    console.log("result",result);
    resp.send(result)
}
