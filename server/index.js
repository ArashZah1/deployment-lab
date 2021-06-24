const express = require('express');
const app = express();

const path = require('path') //path is a package 

app.get('/', function(req, res){
    res.sendFile( path.join(__dirname, '../index/html') )
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Port is running on ${port}`)
})
