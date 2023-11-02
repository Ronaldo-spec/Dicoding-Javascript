
// normal function declaration statement
function square1(num){
    return num*num;
};

// function expression
const square2 = function (num){
    return num*num;
};

console.log(square1(5));

// first class function
function displaySquare(fn) {
    console.log("Square is ", fn(5));
}

displaySquare(square1)

// IIFE
(function square1(num){
    return num*num;
})(6);

(function (x) {
    return (function (y) {
        console.log(x);
    })(2);
})(1);

// try

let num1 = 20, num2 = 3, name = "Johan";

function multiply() {
    return num1 * num2;
}

let result = console.log(multiply());

function getscore() {
    let num1 = 2, num2 = 3;

    function add() {
        return name + " Blocked " + (num1+num2);
        
    }
    return add();
}

let hasil = console.log(getscore());


// function for

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, i * 1000);
    
}

// Callback

function greeting(name) {
    alert('Hello Bro',name);
}

function proses(callback) {
    let name = 'John Doe';
    callback(name);
}

proses(greeting);

// arrow & regular
const square3 = (num) => num*num;


// ----------------------------------------------------------------------------




