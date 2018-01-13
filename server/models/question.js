var mongoose = require('mongoose');
var mySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        goodAnswer: String,
        answers: Array,
        goodAnswer: String
    }
)

module.exports = mySchema;