const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema({
    title : {
        type : String,
        required : true
    },
    snippet : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Blog = mongoose.model('blog', blogSchema);     // first arg -> pluralize (blog -> blogs) -> look for this collection in the db

module.exports = Blog;