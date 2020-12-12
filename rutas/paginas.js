const express=require("express")
const router = express.Router();
const coneccionMySql = require("../bd")

router.get("/", (req, res)=>{
    res.render('paginas/inicio.hbs')
})

router.get("/ofertas", (req,res)=>{
    res.render('paginas/ofertas.hbs')
})

router.get("/bolsa-de-trabajo", (req,res)=>{
    res.render('paginas/bolsa-de-trabajo.hbs')
})

router.get("/conocenos", (req,res)=>{
    res.render('paginas/conocenos.hbs')
})

router.get("/comentarios", (req,res)=>{
    res.render('paginas/comentarios.hbs')
})

router.post("/comentarios", (req,res)=>{
    console.log(req.body)
    coneccionMySql.query(`INSERT INTO comentarios(ID, email, comentario) VALUES (0,"${req.body.email}", "${req.body.comentario}")`,  (error) => {
        if (error){
            console.log(error)
        }
        else{
           res.redirect("/")
        }
        
      })
})

module.exports = router;