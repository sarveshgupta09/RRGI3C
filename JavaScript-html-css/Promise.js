// const p1 =Promise.resolve().then(()=> console.log("A"))
// const p2 =Promise.reject().then(()=>console.log("Error"))
// const p3 =Promise.resolve().then(()=>    console.log("B"))

// Promise.allSettled([p1 ,p2, p3]).then((data)=>console.log(data)).catch((err)=>console.log(err))

// setTimeout(()=>{
//     console.log("Macro1")
// },1000)
// console.log("Start")
// Promise.resolve().then(()=>console.log("Micro"))
// setTimeout(()=>{
//     console.log("Macro")
// },0)
// console.log("End")
// Promise.resolve().then(()=>console.log("Micro1"))


// const {mul , sum} = require('./Imports')
import mul from '../NodeJs/Imports.js'


// console.log(sum(1,2))
console.log(mul(1,2))