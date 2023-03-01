const express = require('express');
const get = express();
get.use(express.json())
require("./Config")
const Practice = require('./Practice');
get.get('/list', async (req, resp) => {
  let data = await Practice.find();
  console.log(data);
  resp.send(data);
});

module.exports = get;