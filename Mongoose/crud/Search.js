// const Practice = require('../Practice');

// module.exports = async function (req, resp) {
//     let data = await Practice.find(
//         {
//             "$or": [
//                 { "name": { $regex: req.params.key } },
//                 { "brand": { $regex: req.params.key } },
//                 { "category": { $regex: req.params.key } },
//             ]
//         }
//     );
//     console.log(data);
//     resp.send(data);
// }
const Practice = require('../Practice');

module.exports = async function (req, res) {
  try {
    const data = await Practice.find({
      $or: [
        { name: { $regex: new RegExp(req.params.key, 'i') } },
        { brand: { $regex: new RegExp(req.params.key, 'i') } },
        { category: { $regex: new RegExp(req.params.key, 'i') } },
      ],
    });
    console.log(data);
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
