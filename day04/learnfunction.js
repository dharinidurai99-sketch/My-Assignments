//Task 1: Function Declaration  Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello, <name>!" to the console. 
function userProfile(Dhari) {
    console.log("Hello " +  Dhari  + "!");
     }
     userProfile("Dhari");

//Task 2: Create an arrow function named `double` that takes a number as a parameter and returns double its value. 
const double = (a) =>a * 2;
console.log(double(5));

//Task 3:Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"` after 2 seconds. 

setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Task 4: Callback Function  Create a function named `getUserData` that takes a callback function as a parameter. Inside 
//`getUserData`, simulate fetching data with `setTimeout` and then call the callback function with that should print “Call Back Function” 
// after 3 seconds.Call the `getUserData` function and log message using the callback function.

function getUserData(callback) {
    setTimeout(function() {
        callback();
    }, 3000);
}
getUserData(function() {
    console.log("Call Back Function");
});
