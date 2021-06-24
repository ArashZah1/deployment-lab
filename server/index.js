const express = require('express');
const app = express();

const path = require('path') //path is a package 

app.use(express.static(path.join(__dirname, '../public')))

app.use("/style.css", express.static(path.join(__dirname, '/public/style.css')))

app.get('/', function(req, res){
    res.sendFile( path.join(__dirname, '../aboutme.html') )
})



const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Port is running on ${port}`)
})
