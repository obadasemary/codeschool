var app = angular.module('store',['store-directives']);

app.controller('StoreController', ['$scope', '$http', function($scope , $http){

    this.products = gems;
    $scope.addIt = function (gems) {
        console.info("added "+gems)
    };

    //var store = this;
    //store.products = [];
    //
    //$http.get('/store-products.json').success(function(data){
    //    store.products = data;
    //});
}]);

app.controller('ReviewController', function () {
    this.review = {};
    this.addReview = function (product) {
        this.review.createdOn = Date.now();
        product.reviews.push(this.review);
        this.review = {};
    }
});


var gems = [
    {
        name: 'Azurite',
        description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
        shine: 8,
        price: 110.50,
        rarity: 7,
        color: '#CCC',
        faces: 14,
        images : [
            'img/Obada_Sara.jpg',
            'img/sailing-ship.jpg',
            'img/Work_Space.jpg'
        ],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }],
        canPurchase : true,
        soldOut : false
    },
    {
        name: 'Bloodstone',
        description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
        shine: 9,
        price: 22.90,
        rarity: 6,
        color: '#EEE',
        faces: 12,
        images : [
            'img/Work_Space.jpg',
            'img/Obada_Sara.jpg',
            'img/sailing-ship.jpg'
        ],
        reviews: [{
            stars: 3,
            body: "I think this gem was just OK, could honestly use more shine, IMO.",
            author: "JimmyDean@example.org",
            createdOn: 1397490980837
        }, {
            stars: 4,
            body: "Any gem with 12 faces is for me!",
            author: "gemsRock@example.org",
            createdOn: 1397490980837
        }],
        canPurchase : true,
        soldOut : false
    },
    {
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: '#000',
        faces: 6,
        images : [
            'img/sailing-ship.jpg',
            'img/Obada_Sara.jpg',
            'img/Work_Space.jpg'
        ],
        reviews: [{
            stars: 1,
            body: "This gem is WAY too expensive for its rarity value.",
            author: "turtleguyy@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "BBW: High Shine != High Quality.",
            author: "LouisW407@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "Don't waste your rubles!",
            author: "nat@example.org",
            createdOn: 1397490980837
        }]
    }
];

