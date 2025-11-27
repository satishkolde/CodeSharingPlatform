var express = require('express');
var path = require('path');
var fs = require('fs');
const cors = require('cors');

var app = express();

// view engine setup
app.use(express.json());
app.use(cors());

const DB_FILE = path.join(__dirname, 'db.json');

// Helper function to load data
function loadData() {
    const dataBuffer = fs.readFileSync(DB_FILE);
    return JSON.parse(dataBuffer.toString());
}

// Helper function to save data
function saveData(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

/* GET users listing. */
app.get('/code/:id', function(req, res) {
    const data = loadData();
    const codeId = req.params.id;
    const code = data.find(value => value.id === codeId);
    return res.json(code);  
});

app.get('/code', function(req, res) {
    const data = loadData();
    return res.json(data);  
});


app.post("/code", (req,res) => {
  const data = loadData();
  const newCodeBlock = req.body;
  newCodeBlock.id = crypto.randomUUID();
  data.push(newCodeBlock);
  saveData(data);
  return res.json(newCodeBlock);
});

app.listen(3000,()=>{
  console.log("Server Listening on Port: 3000")
})
