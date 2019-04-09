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
  res.sendFile(__dirname+'/public/sezioni/smartphone.html');
})

app.get('/salottigiardino', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/salottigiardino.html')
})

app.get('/sedieinterni', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/sedieinterni.html');
})

app.get('/sgabelli', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/sgabelli.html');
})

app.get('/chisiamo', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/chisiamo.html');
})

//PRODOTTI

app.get('/sediainterno1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/sediainterno1.html');
})

app.get('/iphonexs', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/iphonexs.html');
})


//ERROR 404

app.use(function(req,res){
  res.status(404);
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(process.env.PORT || 3000);
