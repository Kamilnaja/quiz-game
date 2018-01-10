var mongoose = require('mongoose');
var mySchema = mongoose.Schema(
    {
        title: String,
        goodAnswer: String,
        answers: Array,
    }
)
module.exports = mySchema;