

// fn();

// // async function fn1(){
// //     // return 1;
// //     return Promise.resolve(11);
// // }

// // fn1().then(function(r){
// //     console.log(r)
// // })


// //async fns always return a promise
// //await




// var r = doubleAfter2seconds(10)
//     .then((r)=>console.log(r))


// var r = doubleAfter2seconds(10)
// .then((result)=>{return doubleAfter2seconds(result)})
// .then((result)=>{return doubleAfter2seconds(result)})
// .then((result)=>{console.log(result)})

// console.log(r)

// function addPromise(){
//     return new Promise((resolve)=>{
//         doubleAfter2seconds(10).then(a=>{
//             doubleAfter2seconds(10).then(b=>{
//                 doubleAfter2seconds(10).then(c=>{
//                     resolve(a+b+c)
//                  })
//             })
//         })
//     })
// };

// addPromise().then(r=>console.log(r));

let doubleAfter2seconds = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(2);
        }, 2000)
    })


async function addAsync(){
    const a = await doubleAfter2seconds;
    const b = await doubleAfter2seconds;
    const c = await doubleAfter2seconds;

    // return a+b+c;
    console.log(a+b+c)
}
addAsync();
// addAsync().then(r=>console.log(r));


let promise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Completed"), 2000)
})

async function fn(){
   let result1 = await promise;
   console.log("1")
   let result2 = await promise;
   console.log("2")
   let result3 = await promise;
   console.log("3")
 
   let r = result1+result2+result3;
   console.log(r);
  
}
// fn();