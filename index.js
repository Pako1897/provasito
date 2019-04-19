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

app.get('/sediainterno4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno4.html');
})

app.get('/sediainterno5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno5.html');
})

app.get('/sediainterno6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno6.html');
})

app.get('/sediainterno7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno7.html');
})

app.get('/sediainterno8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno8.html');
})

app.get('/sediainterno9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno9.html');
})

app.get('/sediainterno10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno10.html');
})

app.get('/sediainterno11', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno11.html');
})

app.get('/sediainterno12', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sedie_da_interni/sediainterno12.html');
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
