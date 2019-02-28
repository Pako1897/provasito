const express = require('express');
const app=express();

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
})

app.get('/smartphone', function(req,res){
  res.sendFile(__dirname+'/public/smartphone.html');
})

app.use(function(req,res){
  res.status(404);
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(process.env.PORT || 3000);
