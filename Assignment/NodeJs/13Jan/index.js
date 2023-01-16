const fs = require("fs");

// for creating new file ( path , data  or file_name , data )  if file path not given it'll 
// create a new file as given below ==>

// fs.writeFileSync("first.txt", "created first file")

// ----------------------------------------------                    Append 
// in JS if want to add a thing or log one after other, then use append 

fs.appendFileSync("append.txt" , " this is first log entry")

// ----------------------------------------------------------------- Read a file

const buf_data = fs.readFileSync("first.txt")
// use toString to convert Buffer data into readable String format
const data = buf_data.toString()

console.log(buf_data)
console.log(data)

// ----------------------------------------------------------------- Append User Log 
fs.appendFile("appendLog.txt", ` [ ${new Date()}, User ABC, Successfully Logged In! ] 
` , 
function (err) {
    if (err){
        console.log(err)
    }
}
)

