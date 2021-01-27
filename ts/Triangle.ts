  /// <reference path = "IShape.ts" /> 
  namespace Drawing { 
    export class Triangle implements IShape { 
        constructor(){}
       public draw() { 
          console.log("Triangle is drawn"); 
       } 
    } 
}