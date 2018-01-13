var mongoose = require('mongoose');
var mySchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        goodAnswer: {
            type: String,
            required: true
        }, 
        answers: Array,
    }
)

module.exports = mySchema;