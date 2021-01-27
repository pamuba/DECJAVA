// class Car { 
//     //field 
//     engine:string; 
    
//     //constructor 
//     constructor(engine:string) { 
//        this.engine = engine 
//     }  
    
//     //function 
//     disp():void { 
//        console.log("Function displays Engine is  :   "+this.engine) 
//     } 
//  } 
 
//  //create an object 
//  var obj = new Car("XXSY1")
 
// //  //access the field 
// //  console.log("Reading attribute value Engine as :  "+obj.engine)  
 
// //  //access the function
// //  obj.disp()



// class Shape { 
//     Area:number 
    
//     constructor(a:number) { 
//        this.Area = a 
//     } 
//  } 
 
//  class Circle extends Shape { 
//     disp():void { 
//        console.log("Area of the circle:  "+this.Area) 
//     } 
//  }
   
//  var obj = new Circle(223); 
//  obj.disp()




// class Root { 
//     str:string; 
//  } 
 
//  class Child extends Root {} 
//  class Leaf extends Child {} //indirectly inherits from Root by virtue of inheritance  
 
//  var obj = new Leaf(); 
//  obj.str ="hello" 
//  console.log(obj.str)



// class PrinterClass { 
//     doPrint():void {
//        console.log("doPrint() from Parent called…") 
//     } 
//  } 
 
//  class StringPrinter extends PrinterClass { 
//     doPrint():void { 
//        super.doPrint() 
//        console.log("doPrint() is printing a string…")
//     } 
//  } 
 
//  var obj = new StringPrinter() 
//  obj.doPrint()


// class StaticMem {  
//     static num:number; 
    
//     static disp():void { 
//        console.log("The value of num is"+ StaticMem.num) 
//     } 
//  } 
 
//  StaticMem.num = 12     // initialize the static variable 
//  StaticMem.disp()      // invoke the static method



// class Person{ } 
// var obj = new Person() 
// var isPerson = obj instanceof Person; 
// console.log(" obj is an instance of Person " + isPerson);



// class Encapsulate { 
//     str:string = "hello" 
//     private str2:string = "world" 
//  }
  
//  var obj = new Encapsulate() 
//  console.log(obj.str)     //accessible 
//  console.log(obj.str2)   //compilation Error as str2 is private




// interface ILoan { 
//     interest:number 
//  } 
 
//  class AgriLoan implements ILoan { 
//     interest:number 
//     rebate:number 
    
//     constructor(interest:number,rebate:number) { 
//        this.interest = interest 
//        this.rebate = rebate 
//     } 
//  } 
 
//  var obj = new AgriLoan(10,1) 
//  console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )