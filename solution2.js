/*
 ## Separation of Concerns 2 (Exercise 3 of 8)

 # Separation of Concerns Part 2

 This is the second exercise to display the concept of Separation of
 Concerns.

 We have already separated out all of the balance related methods, now we
 will look at the change related ones. Take the method that relates to
 handling change and move it into changeHandler.js.

 Just like last time, make sure that the new changeHandler is now calling
 the function, run the tests, and you will have successfully integrated a
 changeHandler into your Vending Machine.


 */

// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

module.exports = {
    getAmount: function(coinType) {
        switch(coinType){
            case 'p': return 1;
            case 'n': return 5;
            case 'd': return 10;
            case 'q': return 25;
            default: throw new Error('Unrecognized coin ' + coinType);
        }
    }
};

