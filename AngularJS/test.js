// function doubleAfter2Seconds(x){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             resolve(x*2);
//         },2000)
//     })
// }

// async function demo(){
//     let a = await doubleAfter2Seconds(10);
//     console.log(a)
//     let b = await doubleAfter2Seconds(10);
//     console.log(b)
//     console.log("Below the function");
// }
// demo();

// setTimeout(()=>{
//     console.log("Hello");
// },1000);


let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            resolve(20);
        },2000)
})


async function demo(){
    let a = await promise
    console.log(a)
    let b = await promise
    console.log(b)
    console.log("Below the function");
}
demo();
setTimeout(()=>{
    console.log("Hello");
},1000);