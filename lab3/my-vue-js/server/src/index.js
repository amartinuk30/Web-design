const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('../src/config/config.js')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
console.log("Connection Succeeded");
});

const cors = require('cors')

const app = express()
app.use(cors({
    origin : "http://localhost:8080",
}))

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(require('./routes/comments1'))
app.use(require('./routes/comments2'))
app.use(require('./routes/comments3'))
app.use(require('../src/routes/registers'))


app.listen(process.env.PORT || config.port,
    () => console.log(`Server start on port ${config.port} ...`))


