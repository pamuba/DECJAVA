// // //Scoping
// // function fn(){
// //     var foo = "Foo";
// //     let bar = "bar";

// //     console.log(foo, bar);

// //     {
// //         var baz = "Bazz";
// //         console.log(baz)
// //     }
// //     console.log(baz)
// // }
// // fn();

// // var funcs = [];

// // for (var i = 0; i < 3; i++) {
// //     funcs[i] = function(){
// //         console.log("Value:"+i)
// //     }
    
// // }

// // for (var j = 0; j < 3; j++) {
// //     funcs[j]();
// // }

// //Hoisting

// // function run(){
// //     // var foo;
// //     console.log(foo) 
// //     let foo = "Foo"
// //     console.log(foo)
// // }
// // run();

// //redecleration

// // let foo = "foo1";
// // let foo = "foo2";

// // const name;
// // name = "Will";

// // arr = [23,55,11,78,45]

// // console.log(arr.sort().reverse())
// // //function(a,b){return a-b}

// // console.log(arr.sort((a,b) => b-a));

// //map reduce filter

// // var persons = [
// //     {id:20, name:'John'},
// //     {id:23, name:'Mary'},
// //     {id:12, name:'Will'},
// //     {id:15, name:'Bill'},
// //     {id:40, name:'Gates'},
// // ]

// // //only ids
// // var ids = [];
// // persons.forEach(function(person){
// //     console.log(person.id)
// //     ids.push(person.id);
// // })

// // console.log(ids);

// // // var id = [];
// // // persons.map(function(person){
// // //     id.push(person.id)
// // // })

// // // console.log(id)



// var people = [
//     {
//         id:10,
//         name:"john",
//         years:14,
//         dept:"HR"
//     },
//     {
//         id:12,
//         name:"john",
//         years:34,
//         dept:"Sales"
//     },
//     {
//         id:13,
//         name:"john",
//         years:24,
//         dept:"HR"
//     }
// ]

// // var totalYears = people.reduce(function(acc,p){
// //     return acc + p.years
// // },10);

// // console.log(totalYears)

// // var hrs = people.filter(function(p){
// //     return p.dept === "HR"
// // })

// // var sales = people.filter(function(p){
// //     return p.dept === "Sales"
// // })

// // console.log(hrs)
// // console.log(sales)


// var personnel = [
//     {
//       id: 5,
//       name: "Luke Skywalker",
//       pilotingScore: 98,
//       shootingScore: 56,
//       isForceUser: true,
//     },
//     {
//       id: 82,
//       name: "Sabine Wren",
//       pilotingScore: 73,
//       shootingScore: 99,
//       isForceUser: false,
//     },
//     {
//       id: 22,
//       name: "Zeb Orellios",
//       pilotingScore: 20,
//       shootingScore: 59,
//       isForceUser: false,
//     },
//     {
//       id: 15,
//       name: "Ezra Bridger",
//       pilotingScore: 43,
//       shootingScore: 67,
//       isForceUser: true,
//     },
//     {
//       id: 11,
//       name: "Caleb Dume",
//       pilotingScore: 71,
//       shootingScore: 85,
//       isForceUser: true,
//     },
//   ];


//   var total = personnel
//   .filter(function(p){
//       return p.isForceUser
//   })
//   .map(function(p){
//       return p.pilotingScore + p.shootingScore
//   })
//   .reduce(function(acc,p){
//       return acc + p
//   },0)

//   console.log(total.toString())

// var foo = 12
// var foo = 24
// console.log(foo)