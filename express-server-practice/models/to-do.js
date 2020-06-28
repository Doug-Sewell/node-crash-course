const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    daysToWork: {
        type: Number,
        required: false
    },
    notes:{
        type:String,
        required:false
    }
},{timestamps:true});

const Todo = mongoose.model('To-do',todoSchema);

module.exports = Todo;