import data  from "./data.js";
import express from "express";

const app = express();
const portNumber = 3000;

//adding interceptor to parse any incoming JSON data
app.use(express.json());

app.listen(portNumber, ()=> {
    console.log(`Listening on port ${portNumber}`)
    console.log(`Endpoints: GET request: 'http://localhost:3000/allData' `)
    console.log(`POST request: 'http://localhost:3000/postRequest' `)
})

let getRequestCount = 0
let postRequestCount = 0

app.get("/allData", (req,res)=> {
    console.log("Recieved GET request...")
    getRequestCount += 1
    console.log(`Processed request count --> GET: ${getRequestCount} POST: ${postRequestCount}`)
    res.send(data)
})


app.post("/postRequest",(req,res) => {

    let postData = req.body
    console.log(`Received POST request: ${JSON.stringify(postData, null, 2)}, sending response...`)
    postRequestCount += 1
    console.log(`Processed request count --> GET: ${getRequestCount} POST: ${postRequestCount}`)
    res.send(postData)
    
   
})