// core java
// int a[5];
// int a[]=new int[5];
// int []a=new int[5];
// Homogenous=> similar data type
//typescript
// hetrogenous array is also allowed
var a1 = [4, 5, 6];
var a2 = [5, 2, 1, 9];
var a3 = [];
var a4 = [2.5, 'Sumit', 8, 'Raokhande', true];
// for (let i = 0; i < a1.length; i++) {
//         console.log(`
//         a1[${i}]=${a1[i]}
//         `)
// }
// console.log("Array value is "+a1);
// console.log("Using Join Method "+a1.join('  '));
// console.log("Using Join Method "+a1.join('[]'));
//for each is applicable on array
// a1.forEach((myvalue,i,a)=>{
//         console.log(`
//             myvalue is ${myvalue} & index is ${i}
//             ${a}
//         `)
// })
// Spread Operator
// rest parameter function
function display(b) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log("value of b " + b);
    console.log(item);
}
// display(1,2);
// display(22,55,66,88,77);
// display(5,85,96,63,25);
var a = [];
//1 add data using push & pop Method
//2 add data using Splice method
//1 add data using push & pop Method
// it works on LIFO principle => Last in first out 
// stack implementation
// a.push(5);
// console.log(a);
// a.push(44,9,77,88,9);
// console.log(a);
// var res=a.pop();
// console.log(a);
// console.log("Poped Value is "+res);
var b = [4, 5, 8, 7, 1];
//2 add data using Splice method
console.log(b);
b.splice(3, 0, 77);
console.log(b);
b.splice(4, 1);
console.log(b);
b.splice(3, 1, 88);
console.log(b);
b.splice(2, 0, 21, 25, 40);
console.log(b);
b.splice(2, 3);
console.log(b);
