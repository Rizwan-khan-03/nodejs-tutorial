const mongoose = require('mongoose');
const practiceSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});
module.exports =  mongoose.model("mals", practiceSchema);