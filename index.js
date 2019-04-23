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

  //sgabelli
app.get('/sgabello1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello1.html');
})

app.get('/sgabello2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello2.html');
})

app.get('/sgabello3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello3.html');
})

app.get('/sgabello4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello4.html');
})

app.get('/sgabello5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello5.html');
})

app.get('/sgabello6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello6.html');
})

app.get('/sgabello7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello7.html');
})

app.get('/sgabello8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello8.html');
})

app.get('/sgabello9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo_interni/sgabelli/sgabello9.html');
})

  //Smartphone

app.get('/note9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/note9.html');
})

app.get('/s10yb', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/s10yb.html');
})

app.get('/s10b', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/s10b.html');
})

app.get('/s10plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/s10plus.html');
})

app.get('/s9pluspb', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/s9pluspb.html');
})

app.get('/s9plusb', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/s9plusb.html');
})

app.get('/s9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/s9.html');
})

app.get('/j6plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/j6plus.html');
})

app.get('/j4plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/j4plus.html');
})

app.get('/a9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/a9.html');
})

app.get('/a7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/a7.html');
})

app.get('/mate20pro', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/mate20pro.html');
})

app.get('/mate20lite', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/mate20lite.html');
})

app.get('/p20lite', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/p20lite.html');
})

app.get('/p20', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/p20.html');
})

app.get('/y5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/y5.html');
})

app.get('/y6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/y6.html');
})

app.get('/psmart2019', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/psmart2019.html');
})

app.get('/psmart', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/psmart.html');
})

app.get('/7a', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/7a.html');
})

app.get('/8a', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/8a.html');
})

app.get('/iphonexs', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/elettronica/telefoni/iphonexs.html');
})


//ERROR 404

app.use(function(req,res){
  res.status(404);
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(process.env.PORT || 3000);
