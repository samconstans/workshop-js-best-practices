This document contains JavaScript Best Practies
Basics

These are JavaScript basics to be aware of.
=== vs ==

function incorrect() {
 var changeDue = "5.99";
 if (changeDue == 5.99) {
  return true;
 } else {
  return false;
 }
}
// output: false

function correct() {
 var changeDue = "5.99";
 if (changeDue === 5.99) {
  return true;
 } else {
  return false;
 }
}
// output: true
Lines of code per JS file and refactoring

JavaScript code should adhere to the SOLID principles just like with any other language.
As a general rule, you should strive to keep JS files down to the size of a screen display (i.e. no need to scroll).
As an absolute maximum, any file that goes beyond 300 lines of code should be considered for refactoring.
<head> vs <body>
```
True or False: It is good practice to put your scripts within the <head> tag of an HTML document.

// output: False; browsers render pages more slowly when scripts are in the <head> tag (as opposed to <body>).
```
' vs "
```
Which of the following variable declarations will properly create a string in JavaScript?

A) var message = "Choice A.";
B) var message = 'Choice B.';
C) Both A) and B) will properly create a string.

// output: C); Single and double quotes both work fine, but it is best practice to choose one or the other for
 your project and stick to it.
```
Formatting
Whitespace
Whitespace between keywords/operators and parameters
if (condition) { ... }
No whitespace
if(condition){ ... }
is preferred for readability purposes.
Curly bracket placement
Inline placement
if (condition) {

} else {

}
Line break placement
if (condition)
{

}
else
{

}
is good for reducing the number of lines in a file.
more explicitly separates function/conditional statement definitions.
Be consistent with whichever you choose.
Line breaks
No general rules of thumb here. Be conscious about breaking up consecutive lines of statements into logical chunks.
Semi-colons (yes or no?)
Pros of using semicolons:
Consistent with popular languages
Promotes readability and writability if accustomed to languages that use them
Pros of omitting semicolons:
Less typing
Be consistent with whichever you choose.
Shorthand expressions
Although they can make trivial statements more concise, beware of nesting complicated logic inside shorthands.
You will sacrifice readability for concision.
Good example ```javascript // Original var biggerThanFive; if (x > 5) { biggerThanFive = 'Yes'; } else { biggerThanFive = 'No'; }
// Shorthand
var biggerThanFive = x > 5 ? 'Yes' : 'No';
```
- Comprehensive list: https://www.sitepoint.com/shorthand-javascript-techniques/
Variable declaration
Good practice (locally scoped): javascript var myObj = {};
Bad practice (unintentional global scope) javascript myObj = {};
Writing 'use strict' at the top of a JS file will prevent this from being allowed.
that vs thisView vs self
You will often need to declare a local copy of the current view for the sake of scoping: ```javascript function myFunction()
 { var thisView = this;

var anotherFunction = function() { thisView.outsideFunction(); }; } ```

The name that you use for this copy is really a matter of preference,
 but to be more descriptive, thisView is usually a good choice for naming.

Arrow functions, one of ES6's new features, allows us to inherit scope from the immediate parent's
scope inside a nested function. ```javascript function myFunction() { this.number = 1

var anotherFunction = () => { this.number = 2 // Valid and cleaner! } } ```

Obsolete Practices

These are coding practices that were once good but have become dated and should be avoided.
Overusing jQuery

Most modern applications use jQuery as an ancillary library, opting for a js framework with features that jQuery
 doesn't provide (data-binding, routing, etc.) as the primary front-end framework. Because of this,
  methods and functions provided by the primary framework should be used before jQuery usage is considered. Additionally:

Avoid making duplicate jQuery calls. Instead, store the result of the initial call in a variable.
<form>
  <div class="alert-error hide" id ="errorDiv">
    <span id="errorDescription"></span>
  </div>
  <div>
    <label>First Name</label>
    <input type="text" />
  </div>
  .
  .
  .
</form>
Bad Practice

function showErrorMessage() {
    $('form').find('#errorDiv').html('An error occurred.')
  $('form').find('#errorDiv').show();
}
Good Practice

function showErrorMessage() {
  var errorDiv = $('form').find('#errorDiv');
    errorDiv.html('An error occurred.')
  errorDiv.show();
}
Ensure that the most efficient jQuery call is used //I'm omitting this as there have been browser optimizations
 that make this less of a concern. Feel free to object . . . by populating this.
Relying on Comments to Clarify Overly Complex or Confusing Code

Complex code should be self-documented and shoud not be dependent on comments. Comments can be used,
but they should be used sparingly.

Bad Practice

/*The code below sorts an array of ints, removes the largest and smallest ints from the array, and sums the remaining array.
  If the given array is empty, it returns 0.*/
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
Good Practice

if(a) {
  var sortedArray = a.sort((x, y) => x - y);
  var arrayWithoutBigSmallInts = sortedArray.slice(1, -1);
  var sumArray = arrayWithoutBigSmallInts.reduce((s, e) => s + e, 0);
}
Storing JavaScript Code in One File

In the past, it was best practice to move embedded javascript found in HTML files to one external javascript file as,
at the time, there wasn't much javascript code being used. Since the amount of javascript being used has significantly increased, that is no longer an acceptable approach. Javascript logic should be broken up into small files, in accordance with the best practices of whatever framework is in use in a given application.

Manipulating Globals

\\Is it necessary to have this section since it's being referenced under best practices?

Manipulating Prototypes (manually or in frameworks like date.js)

Manipulating prototypes is a bad practice because it changes the expected behavior of any instances of objects
 with updated prototypes. This is a particularly bad practices when done on built-in javascript objects.
  Instead, create a new, clearly-named object type.

Bad Practice

Number.prototype.toString = function() { return 'the string of my choosing'; };
var t = new Number(4);

//t.toString() === 'the string of my choosing';
Good Practice

function MyNumber() {
    Number.call(this);
}
MyNumber.prototype = Object.create(Number.prototype);
MyNumber.prototype.toString = function() {
  return 'the string of my choosing';
};
var myNum = new MyNumber(4);

//myNum.toString() === 'the string of my choosing'
Using Browser Detection Instead of Feature Detection

Performing browser detection to determine whether specific features are available is prone to error
because it's hard to account for every version of every browser over time. Instead, use feature detection,
in which you test whether a feature is available.

Bad Practice

var isSafari = navigator.userAgent.indexOf("Safari") > -1;
if (isSafari) {
    var thisMouseEvent = new MouseEvent('typing');
}
Good Practice

if (typeof MouseEvent !== 'undefined') {
    var thisMouseEvent = new MouseEvent('typing');
}
Agile Engineering

These are Agile Engineering best practices
TDD: Test Driven Development

Red : write small failing tests
Green : write small amount of passing code
Refactor : improve the code
Unit Testing

Define the behavior of production code
Single module only
Isolates behavior
Reusable
Should be FIRST
Fast
Isolated
Repeatable
Self-verifying
Timely
SOLID Principles

Single Responsibility Principle
Each function should only have one responsibility as well as each module
Open Closed Principle
Software entities (functions) should be open for extension, but closed for modification
Liskov Substitution Principle (ES 2015+)
Derived classes must be substitutable for their base classes. Code to abstraction
Interface Segregation Principle (TypeScript)
Clients should not be forced to depend upon interfaces that they do not use
Interfaces are interchangeable with option hashes
Dependency Inversion Principle (TypeScript)
Depend on abstractions, not on concretions
Code Smells

Duplicate code

Long methods

Big classes/files

Empty catch clauses

Significant use of statics/globals

Variables with wide scope

Poorly named variables

Switch or with statements

Unnecessary complexity

Comments

Legacy Code

Identify SOLID principles that are violated by legacy code
Write unit tests for existing code
Refactor code without breaking functionality or unit tests
Note: applies to back end code, front end code might require integration tests
Continuous Integration & Deployment #### Continuous Integration Team members integrate code together frequently,
 each integration being tested by an automated build to detect errors quickly
Build - automated, self-testing, everything included
Unit, integration, system, acceptance, UI, performance tests - run each build
Versioning - single source repository
Deployment - automated
Reports - visible to everyone
Notification
Git workflow with pull requests, etc.
#### Continuous Deployment

  - “Build Once, Deploy many”
  - Development, Test, Production environments
  - Each check in by a developer, pipeline is run:
    - Unit tests
    - Static code analysis
    - Integration tests
    - Deploy
    - Acceptance tests
Technical Debt
_Neglecting design = borrowing money
Slower development = paying interest on the loan
Time spent on bad code = interest on debt
Refactoring = paying off principal debt_
  - As time increases, more technical debt increases cost of change
  - Bad design pays off in short run, good design pays off in long run
  - Intentional “Good” debt
  - Cycle
    - pressure -> take debt -> fail to pay back -> debt accrual -> reduced velocity -> pressure -> etc
Third-Party Libraries

Here are some things to ask yourself and your team before importing a third-party library.
Do you need the third-party library?

Adding a third-party library dependency into your project comes with some inherit risk.
Make sure that whatever functionality you are getting out of the third-party library is worth the risk and not something
that you could easily and quickly implement yourself.

Do you have the rights to use it?

Just because you were able to find the code for a third-party library online does not necessarily mean
you can use it for your project. Make sure to read the license for the library to make sure that the
agreements work for your project and future distribution plans.

Is the project well-maintained?

Make sure that the project is well-maintained. This does not necessarily mean that the project is being constantly updated,
but that bugs are addressed quickly, updates are made when needed to keep the library functioning,
and that the code is well tested.

Is the project stable?

Having stable working third-party libraries is crucial to development. If the project has a lot of bugs that it needs
to address or is constantly adding new features that either break old functionality or require old code to be updated
to use new standards, it may not be worth using. In particular, be wary of libraries that are in alpha or beta.

How active is the community and the dev team?

It is helpful to have an active community or developer team associated with a third-party library.
You may run into problems with the library that you will not be able to figure out without information from
the library's developers. Being able to contact experienced users or the library's developers to ask questions can be invaluable.