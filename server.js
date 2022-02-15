require('dotenv').config();
const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.port;


app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: true}));

require(`${__dirname}/app/routes`)(app);

app.listen(port, () =>{
    console.log(`Example app listening at ${port}`)
})
