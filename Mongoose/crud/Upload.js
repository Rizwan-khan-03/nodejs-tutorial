const Practice = require('../Practice');
const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "uploads")
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")
module.exports = upload;

