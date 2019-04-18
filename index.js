const express = require('express');
const app=express();

//IMMAGINI
app.use('/img', express.static('public/img'));

//HOMEPAGE
app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
})

//SEZIONI
app.get('/smartphone', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/elettronica/smartphone.html');
})

app.get('/salottigiardino', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo_esterni/salottigiardino.html')
})

app.get('/sedieinterni', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo_interni/sedieinterni.html');
})

app.get('/sgabelli', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo_interni/sgabelli.html');
})

app.get('/chisiamo', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/chisiamo.html');
})

//PRODOTTI

  //Sedie da interno
app.get('/sediainterno1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno1.html');
})

app.get('/sediainterno2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno2.html');
})

app.get('/sediainterno3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno3.html');
})


  //Smartphone
app.get('/iphonexs', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/iphonexs.html');
})


//ERROR 404

app.use(function(req,res){
  res.status(404);
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(process.env.PORT || 3000);
