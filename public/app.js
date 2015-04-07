var jetbrains = angular.module("jetbrains", []);

jetbrains.controller("AppCtrl", function($http) {
    var app = this;
    var url = "http://localhost:3000";

    app.saveProduct = function(newProduct) {
        $http.post(url + "/add", {name:newProduct}).success(function() {
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

