
 /*
 # JAVASCRIPT BEST PRACTICES

 ## Fix Your Teammates' Mistakes (Exercise 7 of 8)

 #Bad Practices

 The goal of this exercise is to learn to be able to identify bad practices
 in code. First, take the Best Practices Quiz located in the lower menu.
 Then open balanceManager.js and fix all of the mistakes you find there.

 Both of these exercises draw from the Javascript Best Practices Curriculum
 which can be found here:
 [https://github.com/excellalabs/the-javascript-curriculum](https://github.
 com/excellalabs/the-javascript-curriculum). It might be a good idea to
 look it over if you have not already.

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
         if(!this.canAfford(amount)){
             throw new Error('Insufficient balance');
         }
         balance -= amount;
     }
 };
