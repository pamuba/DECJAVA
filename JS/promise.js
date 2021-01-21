let promise = new Promise(function(resolve, reject){
    setTimeout(()=>resolve("Happened"), 2000)
});

//Consumers

promise
.then(
    result => console.log(result),
    // error => console.log("Promise Rejected")//not run
)
.catch(err=>console.log("Catch"))
.finally(()=>console.log("Always runs"))
    
promise
.then(
    result => console.log(result),
    // error => console.log("Promise Rejected")//not run
)
.catch(err=>console.log("Catch"))
.finally(()=>console.log("Always runs"))


//sync try catch
//async callbacks 