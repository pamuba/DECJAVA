//How many ways we can create an object
//3...4

//Promise Chaining

new Promise(function(re, rj){
    setTimeout(()=>re(1), 1000);
}).then(function(r){
    console.log(r);
    return r*2;
}).then(function(r){
    console.log(r);
    return r*2;
}).then(function(r){
    console.log(r);
    return r*2;
});





