const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/thirdDB");
const practiceSchema = mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});
const main = async () => {
    const PracticeModal = mongoose.model("mals", practiceSchema);
    let data = new PracticeModal({
        name: "imax",
        price: 120,
        brand: "canvas",
        category: 'tv'
    });
    let res = await data.save();
    console.log("res", res);
};
// main()

const updateIndb = async () => {
    const PracticeModal = mongoose.model("mals", practiceSchema);

    let data = await PracticeModal.updateOne(
        { name: 'imax' },
        { $set: { price: 140, name: "imax2" } },
        // { maxTimeMS: 30000 } 
    )
    console.log("data", data);
}
// updateIndb();

const deleteIndb = async () => {
    const PracticeModal = mongoose.model("mals", practiceSchema);

    let data = await PracticeModal.deleteOne(
        { name: 'imax2' },
    )
    console.log("data", data);
}
// deleteIndb();
const findIndb = async () => {
    const PracticeModal = mongoose.model("mals", practiceSchema);
    //find all data in DB
    // let data = await PracticeModal.find()
    //find single data in DB
    let data = await PracticeModal.find(
        { name: 'imax' },
    )
    console.log("data", data);
}
findIndb();