const express = require('express');
const app=express();

app.use('/img', express.static('public/img'));

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
})

app.get('/smartphone', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/smartphone.html');
})

app.get('/salottigiardino', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/salottigiardino.html')
})

app.get('/sedieinterni', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/sedieinterni.html');
})

app.get('/chisiamo', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/chisiamo.html');
})

//prodotti

app.get('/iphonexs', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/iphonexs.html');
})

app.use(function(req,res){
  res.status(404);
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(process.env.PORT || 3000);
