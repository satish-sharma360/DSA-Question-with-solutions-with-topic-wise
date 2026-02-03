const http = require('http')
const fs = require('fs')

const PORT = 8080


const server = http.createServer((req,res)=>{
    
    const data = fs.readFileSync('example.txt')
    res.end(data);
  });
server.listen(PORT,()=>{
    console.log("Server is Running...")
})