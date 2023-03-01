const Practice = require('../Practice');

module.exports = async function(req, resp) {
    let data = await Practice.updateOne(req.params,{$set:req.body});
    console.log(req.params);
    resp.send(data);
}
