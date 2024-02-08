const express = require("express"); // loading the express package into the file
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser")

const app = express();

const PORT = 3001;

//  middlewares = PLUGINS for our server
app.use(express.static("public"))

// ROUTES = instructions for our server

app.get("/", (req, res) => {
    // whatever we want to happen if we received "/hello" request

    res.sendFile(path.join(__dirname, "./public/index.html"))    
})

app.get("/notes", (req, res) => {
    // whatever we want to happen if we received "/hello" request

    res.sendFile(path.join(__dirname, "./public/notes.html"))    
  
})

// app.get("/assets/css/styles.css", (req, res) => {
//     // whatever we want to happen if we received "/hello" request

//     res.sendFile(path.join(__dirname, "./public/assets/css/styles.css.html"))    
  
// })

app.get("/api/notes", (req, res) => {


    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if(err) {
            console.log(err)
        } else {
            const convertedData = JSON.parse(data)

            res.json(convertedData)
        }
    })


    // res.json([
    //     {
    //         "title":"Test Title",
    //         "text":"Test text"
    //     }
    // ])
}) 

app.post("/api/notes", (req, res) => {

    // receive the req.body

    // read the current db.json file

    // add the req.body into the current value of db.json

    // update db.json file by doing fs.write



})


// start the server
app.listen(PORT)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    // Process the new note data
    res.json(newNote);
  });