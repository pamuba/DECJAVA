// Let’s consider an object −

// var person = { 
//    FirstName:"Tom", 
//    LastName:"Hanks", 
//    sayHi: ()=>{ return "Hi"} 
// };
// If we consider the signature of the object, it could be −

// { 
//    FirstName:string, 
//    LastName:string, 
//    sayHi()=>string 
// }



interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} 
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName);
console.log(employee.lastName);


// interface RunOptions { 
//    program:string; 
//    commandline:string[]|string|(()=>string); 
// } 

// //commandline as string 
// var options:RunOptions = {program:"test1",commandline:"Hello"}; 
// console.log(options.commandline)  

// //commandline as a string array 
// options = {program:"test1",commandline:["Hello","World"]}; 
// console.log(options.commandline[0]); 
// console.log(options.commandline[1]);  

// //commandline as a function expression 
// options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 

// var fn:any = options.commandline; 
// console.log(fn());



interface Person { 
    age:number 
 } 
 
 interface Musician extends Person { 
    instrument:string 
 } 
 
 var drummer = <Musician>{}; 
 drummer.age = 27 
 drummer.instrument = "Drums" 
 console.log("Age:  "+drummer.age) 
 console.log("Instrument:  "+drummer.instrument)