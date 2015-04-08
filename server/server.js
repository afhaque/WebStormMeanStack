// Node Server Logic
//=======================================================

// Dependencies
var express = require('express');
var cors = require('cors');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

// Creates the App
var app = express();
app.use(cors());
app.use(bodyParser());

// Establishes the Mongoose Model to the Database

mongoose.connect('mongodb://localhost/jetbrains');
var Product = mongoose.model('Product', {name: String, author: String});

// Establishes the initial display of products
app.get('/', function(req, res) {
    Product.find(function(err, products) {
        res.send(products);
    })
})

// Provides a function for adding entries - This gets called on from Angular upon hitting submit
app.post("/add", function(req, res) {
    var name = req.body.name;
    var author = req.body.author;
    var product = new Product({name: name, author: author});
    product.save(function(err) {
        res.send();
    })
})

// Sets the local port to 3000
app.listen(3000);

// Initial code for adding in documents to the MongoDB database via mongoose
/*
var product = new Product({name: "Apache"});
product.save(function(err) {
    if(err){
        console.log('failed');
    }else{
        console.log('saved');
    }
});*/

