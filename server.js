const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});

/*
//Example get request with database
app.get('/tasks', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});
*/

// Start your code below

app.get('/tasks', (req, res) => {
  mongo.getTasks((result) => {
    res.json(result);
  })
});

app.get('/tasks', (req, res) => {
  mongo.createTasks((result) => {
    res.json(result);
  })
});

app.post('/tasks/:title/:language/:status', (req, res) => {
  // app.post('/task/:title', (req, res) => {
 
   let title = (req.params.title);
   let language = (req.params.language);
   let status = (req.params.status);
  
   console.log("server",title,language,status)
   //console.log(title)
 
  // res.json(`server is working data => ${title} ${language} ${status}`)
  
 // console.log(req.body)
  console.log("helloooooooooooooooooooo server")
 
   mongo.newcreate((result) => {
      res.json(result);
    },title,language,status)
 });





const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));