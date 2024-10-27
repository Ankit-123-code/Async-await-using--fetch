 async function getmesomedata(url){
let Response= await fetch(url);
let actualdata= Response.json()
console.log(actualdata);
}
getmesomedata("https://catfact.ninja/fact");



// Dusra concept using promises
// let data= new Promise((resolve,reject)=>{
//  async function getsomedata(url){
// let Saman=  await fetch("https://catfact.ninja/fact");
// let realsaman= await Saman.json();
// console.log(realsaman);
// }
// resolve(getsomedata());

// })
// data.then((mall)=>{
//     console.log(mall);
// })





