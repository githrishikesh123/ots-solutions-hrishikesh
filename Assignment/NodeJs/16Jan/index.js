const fs = require("fs")

fs.writeFileSync("first.txt" , "first file created")


fs.appendFileSync("third.txt", `second file append 

`)