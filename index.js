import products  from "./data.js";
import express from "express";

const app = express();
const portNumber = 3000;

//adding interceptor to parse any incoming JSON data
app.use(express.json());

app.listen(portNumber, ()=> {

    //logging endpoint info onto the console
    console.log(`Listening on port ${portNumber}`)
    console.log(`Endpoints: GET request: 'http://localhost:3000/products' `)
    console.log(`POST request: 'http://localhost:3000/postRequest' `)
})

//initiating variables for request counters
let getRequestCount = 0
let postRequestCount = 0

//get request 
app.get("/products", (req,res)=> {

    //logging on console for get request
    console.log("Recieved GET request...")
    getRequestCount += 1
    console.log(`Processed request count --> GET: ${getRequestCount} POST: ${postRequestCount}`)
    res.send(products)
})


//post request
app.post("/postRequest",(req,res) => {

    let postData = req.body

    //logging on console for post request
    console.log(`Received POST request: ${JSON.stringify(postData, null, 2)}, sending response...`)
    postRequestCount += 1

    //adding data to my data.js array
    products.push(postData);  
    console.log(`Processed request count --> GET: ${getRequestCount} POST: ${postRequestCount}`)
    res.send(postData)
    
   
})

//delete request
app.delete("/deleteData",(req,res) => {

    //logging on console for delete request
    console.log("Received DELETE request, deleting all data...");

    //clear the array/ data object
    products.length = 0

    //finally, send response
    res.send({ message: "All data deleted." });
   
})