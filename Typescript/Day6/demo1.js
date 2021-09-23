var a = [22, 1, 33, 45, 6, 2, 9, 77, 23, 11];
//slice => It is used to copy a data from array from particular index to end index
var temp = a.slice(1, 6);
// console.log("Original Array "+a);
// console.log("Copied Data is "+temp);
// var temp1=a.slice();
// console.log("Copied Data is "+temp1);
// var temp2=a.slice(3);
// console.log("Copied Data is "+temp2);
//Map
var a1 = [2, 3, 4, 5, 6];
var res = a1.map(function (value) {
    return (value * value);
});
// console.log("Original array "+a1);
// console.log("square "+res);
a1 = a1.map(function (value) {
    return (value * value);
});
// console.log("Original array "+a1);
