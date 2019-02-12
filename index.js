const express = require('express');
const app=express();

app.get('/', function(req,res){
  res.sendFile(__dirname+'/public/index.html');
})

app.use(function(req,res){
  res.status(404);
  res.write('error 404 - page not found');
  res.end();
})


app.listen(process.env.PORT || 3000);
