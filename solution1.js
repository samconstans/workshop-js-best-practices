/*
 ## Separation of Concerns 1 (Exercise 2 of 8)

 # Separation of Concerns Part 1

 This exercise will display the concept of Separation of Concerns. Our
 file, vendingMachine.js, is too large and contains too many functions. In
 order to make our code simpler and more maintainable, we will be grouping
 functions together into their own files.

 To pass this exercise, take the 4 methods and any variables that relate to
 balance management and move them to balanceManager.js. Then, back in
 vendingMachine.js, change the method of calling those functions from this
 to our new balanceManager.

 That's it! Move those four methods, make sure they are being called by the
 balanceManager, run the tests, and we will have a functioning
 balanceManager as part of our Vending Machine.

 */

var balance = 0;

module.exports = {
    increaseBalance: function(amount){
        balance += amount;
    },
    getBalance: function(){
        return balance;
    },
    canAfford: function(amount){
        return amount <= balance;
    },
    decreaseBalance: function(amount){
        if(!canAfford(amount)){
            throw new Error('Insufficient balance');
        }
        balance -= amount;
    }
};