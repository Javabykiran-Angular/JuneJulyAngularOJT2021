
var a:number=10; //forward declaration & defination

var a1=20;

var a3:any;
a3=2.5;
// console.log("a3 value is "+a3);
a3='Sumit';
// console.log("a3 value is "+a3);
a3=true;
// console.log("a3 value is "+a3);

// Type Assertion

var a4:any;
//1 Angle Bracket
// 2 As syntax

//1 angle bracket

var temp=(<string> a4);
// temp.

// 2 as syntax

var temp2=(a4 as string);
// temp2.

//Operators
//Airthematic => +,-,/,*,%
// logical => &&, || 
//bitwise => &,|,^,!,~,<<,>>
//Assignment => =,+=,-=
//relational => <,>,<=,>=,==,!=,===(Strongly equality both has same datatype as well as its value )
var a:number=6;
var b:number=6
a===b
//ternary condition?expression1:expression2
//pre/post => ince/decr ++,--

//Control  Statement
//if,if-else,switch ,break;continue,nested if-esle
//Loop
//For, while,do-while,foreach

var count=2;
if(count<4){
    // console.log('Condition is true');
}else{
    // console.log('Condition is false')
}

var choice=4;
// switch(choice){
//     case 1:
//         console.log("u r in Case 1");
//         break;
//     case 2:console.log("u r in Case 2");
//         break;
//     default:console.log("u r in default Case");
//         break;
// }


//While

var count1:number=5;

while(count1!=0){
    // console.log('Value of Count1 is '+count1);
    count1--;
}

var count2=4;
do{
    // console.log('Value of count2 '+count2);
    count2--;
}while(count2!=0)


for(var i=0;i<4;i++){
        // console.log("Index is "+i);
}
// console.log("After loop value of i "+i)

// difference between var, let,const
// var => scope is global scope
// let => scope within a nearest block

for (let j = 0; j < 4; j++) {
    console.log("Value of j is "+j)
}

// console.log("after loop "+j)

const pi=3.14;


