var jetbrains = angular.module("jetbrains", []);

jetbrains.controller("AppCtrl", function($http) {
    var app = this;
    var url = "http://localhost:3000";


    // Function for saving products. This takes a newProduct, establishes it's value as being the name
    app.saveProduct = function(newProduct, newProductAuthor) {
        $http.post(url + "/add", {name:newProduct, author: newProductAuthor}).success(function() {
            loadProducts(); // On success we are reloading the product list
        })
    };

    function loadProducts() {
        $http.get(url).success(function (products) {
            app.products = products;
        })
    };
    loadProducts();
});

