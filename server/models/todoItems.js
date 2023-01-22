//import mongoose to create a schema
const mongoose = require('mongoose');
//create a schema
const TodoItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

//export the schema
module.exports = mongoose.model('TodoItem', TodoItemSchema);