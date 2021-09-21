
//anonymous function

    var temp1=function (){
        console.log("Anonymous function...");
    }

    // temp1();

    //Fat arrow function/Arrow function

       var temp2=()=>{
            console.log("U r Fat arrow function...")
        }

        // temp2();

        var temp3=(a:number,b:number):number=>{
            return (a+b);
        }

        // console.log(`Addition is ${temp3(7,6)} `);
        
        // HW function with para.& without return type using fat arrow
        // HW function without para.& with return type using fat arrow

        //Optional parameter function

            function add1(a?:number,b?:number){
                console.log("Value of a is "+a); // 8
                console.log("Value of b is "+b); // undefined
                console.log("Addition of a+b is "+(a+b)); // NAN=> Not a number
            }

        // add1(5)
        //rule if u mentioned 1st parameter is optional then follwed by next parameter make it as optional

        function add2(a:number,b?:number,c?:number){
            console.log("Value of a is "+a); // 8
            console.log("Value of b is "+b); // undefined
            console.log("Addition of a+b is "+(a+b)); // NAN=> Not a number
        }

    // add2(5,5)

    // default parameter function

    function add3(a:number,b:number=8){
        console.log("Value of a is "+a); // 2
        console.log("Value of b is "+b); // 8
        console.log("Addition of a+b is "+(a+b)); // 10
    }

    // add3(2);
    // add3(3,5);

    function add4(a:number=7,b?:number){
        console.log("Value of a is "+a); // 7
        console.log("Value of b is "+b); // undefined
        console.log("Addition of a+b is "+(a+b)); // NAN
    }

    // add4();

    // add4();

    function add5(a:number=9,b:number){
        console.log("Value of a is "+a); // 7
        console.log("Value of b is "+b); // undefined
        console.log("Addition of a+b is "+(a+b)); // NAN
    }

    // add5(10,4);

    function add6(a?:number,b:number=10){
        console.log("Value of a is "+a); // undefined
        console.log("Value of b is "+b); // 10
        console.log("Addition of a+b is "+(a+b)); // NAN
    }

    add6();
