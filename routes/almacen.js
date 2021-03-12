var express= require('express');
var router= express.Router();
var session= require ('express-session');


router.get('/alta',(req, res, next)=>{
  var ses= req.session;
  res.render ("almacen/frmAlta",{user: ses.userdata});
});

router.get('/reporte',(req, res, next)=>{
  res.render ("almacen/frmReporte");
});

router.get('/bajas',(req, res, next)=>{
  res.render ("almacen/frmBaja");
});



module.exports= router;
