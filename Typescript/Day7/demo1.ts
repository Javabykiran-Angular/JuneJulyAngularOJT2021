export class Myclass{
    public fname:string;
    private lname:string;
    protected id:number;

    constructor(fname:string,l:string,id:number){
        this.fname=fname;
        this.lname=l;
        this.id=id;
    }    
    

    display(){
        console.log(`
            First name  ::${this.fname}
            Last Name   :: ${this.lname}
            ID          :: ${this.id}
        `)
    }
}

// let obj=new Myclass("sumit","Raokhande",9);
// obj.display();

export function add1(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;




