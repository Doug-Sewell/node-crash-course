const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    snippet:{
        type: String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{timestamps:true});

const Blog = mongoose.model('Blog',blogSchema); //Make the model based on schema above, define the name as a singular version of the collection name. (blogs being the collection name in mongoose), and store it in a constant.

module.exports = Blog;