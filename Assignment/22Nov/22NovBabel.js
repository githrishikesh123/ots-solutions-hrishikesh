// basic configuration of Babel
// npm i @bable/core
// npm i @bable/cli
// npm i @bable/preset-env

// npx babel index.js


console.log("Hello JS")

async function callApi(){
    return await(`www.google.com`) 
}
callApi()