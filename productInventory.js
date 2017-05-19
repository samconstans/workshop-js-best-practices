/*
 ## Separation of Concerns 3 (Exercise 4 of 8)

 # Separation of Concerns Part 3

 This is the third and final exercise to display the concept of Separation
 of Concerns.

 We have already separated out all of the balance and change methods, so
 the only ones left (besides the actual vending machine's) have to do with
 products. Take the two methods that relate to products and move them into
 productInventory.js.

 Make sure that the new productInventory is now calling the functions, run
 the tests, and you will have a Vending Machine whose concerns are fully
 separated.


 */

var products = [
    {
        name: 'Skittles',
        price: 85,
        id: 'A1'
    }
];

module.exports = {
    getProducts: function() {
        return products;
    },

    getProduct: function(productId) {
        var product = products.find(function(p) { return p.id === productId; });
        return product;
    }
};