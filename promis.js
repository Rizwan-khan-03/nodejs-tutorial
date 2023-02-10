let a = 10;
let b = 0;

// handling asynchronous operation in js
let promisHandler = new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve(50);
    },3000)
})
promisHandler.then((data)=>{
    b =data;
    console.log(a+b);
})


let d = 10;
let e = 20;

let sum = async () => {
    await setTimeout(() => {
        console.log("sum", d + e);
    }, 3000)
}
sum();