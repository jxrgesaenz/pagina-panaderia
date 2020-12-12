const mysql      = require('mysql');
var coneccionMySql = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jorgais'
});
 
coneccionMySql.connect(err=>{
        if(err){
            console.log(err.sqlMessage)
        }else{
            console.log("Base de datos conectada")
        }
    })






module.exports = coneccionMySql;