const Blog = require('../models/blog');

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt : -1 })
        .then((result) => {
            res.render('blogs/index', { title : 'All Blogs', blogs : result});
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_details = (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('blogs/details', { title : 'Blog Details', blog : result})
        })
        .catch((err) => {
            res.status(404).render('404', { title : 'Blog not Found'});
        })
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title : 'Create a new Blog'});
}

const blog_create_post = (req, res) => {
    console.log(req.body);
    const blog = new Blog(req.body); // no need to pass an object as the name fields of the form as same as the fields in the schema
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_edit = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render('blogs/edit', {title : "Edit Blog", blog : result});
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id;
   
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_update = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndUpdate(id, req.body)
        .then((result) => {
            res.redirect(`/blogs/${id}`);
        })
        .catch((err) => {
            console.log(err);
        })
}


module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_edit,
    blog_update    
}