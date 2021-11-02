const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const app = express();


const dbURI = "mongodb+srv://sandy-node-nn:atlas25@cluster0.gzgq5.mongodb.net/nodetuts?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => {
        console.log("Connected to db");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true }));


app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title : 'About'});
});

// blog routes
app.use('/blogs', blogRoutes);

// error route
app.use((req, res) => {
    res.status(404).render('404', { title : '404'});
});