//anonymous function
var temp1 = function () {
    console.log("Anonymous function...");
};
// temp1();
//Fat arrow function/Arrow function
var temp2 = function () {
    console.log("U r Fat arrow function...");
};
// temp2();
var temp3 = function (a, b) {
    return (a + b);
};
// console.log(`Addition is ${temp3(7,6)} `);
// HW function with para.& without return type using fat arrow
// HW function without para.& with return type using fat arrow
//Optional parameter function
function add1(a, b) {
    console.log("Value of a is " + a); // 8
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN=> Not a number
}
// add1(5)
//rule if u mentioned 1st parameter is optional then follwed by next parameter make it as optional
function add2(a, b, c) {
    console.log("Value of a is " + a); // 8
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN=> Not a number
}
// add2(5,5)
// default parameter function
function add3(a, b) {
    if (b === void 0) { b = 8; }
    console.log("Value of a is " + a); // 2
    console.log("Value of b is " + b); // 8
    console.log("Addition of a+b is " + (a + b)); // 10
}
// add3(2);
// add3(3,5);
function add4(a, b) {
    if (a === void 0) { a = 7; }
    console.log("Value of a is " + a); // 7
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN
}
// add4();
// add4();
function add5(a, b) {
    if (a === void 0) { a = 9; }
    console.log("Value of a is " + a); // 7
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); // NAN
}
// add5(10,4);
function add6(a, b) {
    if (b === void 0) { b = 10; }
    console.log("Value of a is " + a); // undefined
    console.log("Value of b is " + b); // 10
    console.log("Addition of a+b is " + (a + b)); // NAN
}
add6();
