// var firstName:string = "John"; 
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2 
// console.log("name"+firstName) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum)
// var str = '1' 
// var str2:number = <number><any> str   //str is now of type number 
// console.log(typeof(str2))
// var str = '1';
// var str2 = str; 
// console.log(typeof (str2));
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
