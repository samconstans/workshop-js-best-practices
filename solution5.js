/*
 ## Test Driven Development (Exercise 6 of 8)

 # TDD

 This exercise will test your ability to write code based off of the tests
 that are provided. Using Test-Driven Development, you write the tests for
 the functionality that you want to implement first. Then, you write the
 code for the method so that the tests you initially wrote.

 The tests in this exercise are provided, but they will drive the design of
 the function you will implement, convertToChange(). convertToChange()
 should take in a single integer number in cents (e.g. $0.89 = 89) and
 return an array of the coins that would add up to this number. Keep in
 mind that the array of coins should be in the highest order in terms of
 coin value. For example, if 26 is the parameter, you should return 1 penny
 and 1 quarter in the array, even though you could technically return
 several other combinations of coins (e.g. 2 dimes, 1 nickel, 1 penny).

 Run the tests in this exercise to see what the expected output is. Then
 implement the convertToChange() function in changeHandler.js to verify
 that the tests pass.


*/

// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

var coins = {
    'p': 1,
    'n': 5,
    'd': 10,
    'q': 25
};

var coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {
    convertToChange: function(amount) {
        var change = [];
        for(var i in coinsByAmount){
            var coinType = coinsByAmount[i];
            var coinValue = coins[coinType];

            while(amount >= coinValue){
                change.push(coinType);
                amount -= coinValue;
            }
        }
        return change;
    }
};