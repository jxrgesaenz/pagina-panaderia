const express = require("express")
const exphbs =require('express-handlebars');
const bodyParser = require("body-parser");
const path=require("path")

const app=express()


const PORT = process.env.PORT || 5000;
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: "+PORT)
})