const promise=new Promise((resolve,reject)=>{
        resolve("im a succes promise !");
})

console.log("before");

promise.then((data)=>{
    console.log(data);
    return new Promise((res,req)=>{
        res("im another promise ");
    })
}).then((data)=>{
    console.log("---------",data);
}).catch((error)=>console.log("hari error : ", error)); 

console.log("after");

