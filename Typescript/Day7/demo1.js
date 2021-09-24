"use strict";
exports.__esModule = true;
exports.pi = exports.add1 = exports.Myclass = void 0;
var Myclass = /** @class */ (function () {
    function Myclass(fname, l, id) {
        this.fname = fname;
        this.lname = l;
        this.id = id;
    }
    Myclass.prototype.display = function () {
        console.log("\n            First name  ::" + this.fname + "\n            Last Name   :: " + this.lname + "\n            ID          :: " + this.id + "\n        ");
    };
    return Myclass;
}());
exports.Myclass = Myclass;
// let obj=new Myclass("sumit","Raokhande",9);
// obj.display();
function add1(a, b) {
    return (a + b);
}
exports.add1 = add1;
exports.pi = 3.14;
