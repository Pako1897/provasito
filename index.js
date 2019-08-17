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
  res.sendFile(__dirname+'/public/sezioni/smartphone_tv_acc/smartphone.html');
})

app.get('/console', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/smartphone_tv_acc/console.html');
})

app.get('/tv', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/smartphone_tv_acc/tv.html');
})

app.get('/salottigiardino', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/salottigiardino.html')
})

app.get('/lettini', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/lettini.html')
})

app.get('/sedie', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/sedieinterni.html');
})

app.get('/sgabelli', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/sgabelli.html');
})

app.get('/poltrone', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/poltronerelax.html');
})

app.get('/poltroneuff', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/poltroneuff.html');
})

app.get('/poltronediv', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/poltronediv.html');
})

app.get('/tavoli', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/arredo/tavoli.html');
})

app.get('/chisiamo', function(req,res){
  res.sendFile(__dirname+'/public/sezioni/chisiamo.html');
})

//PRODOTTI

  //Sedie da interno
app.get('/sediainterno1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno1.html');
})

app.get('/sediainterno2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno2.html');
})

app.get('/sediainterno3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno3.html');
})

app.get('/sediainterno4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno4.html');
})

app.get('/sediainterno5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno5.html');
})

app.get('/sediainterno6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno6.html');
})

app.get('/sediainterno7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno7.html');
})

app.get('/sediainterno8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno8.html');
})

app.get('/sediainterno9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno9.html');
})

app.get('/sediainterno10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno10.html');
})

app.get('/sediainterno11', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno11.html');
})

app.get('/sediainterno12', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno12.html');
})

app.get('/sediainterno13', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno13.html');
})

app.get('/sediainterno14', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno14.html');
})

app.get('/sediainterno15', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno15.html');
})

app.get('/sediainterno16', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno16.html');
})

app.get('/sediainterno17', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno17.html');
})

app.get('/sediainterno18', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sedie/sediainterno18.html');
})



  //sgabelli
app.get('/sgabello1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello1.html');
})

app.get('/sgabello2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello2.html');
})

app.get('/sgabello3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello3.html');
})

app.get('/sgabello4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello4.html');
})

app.get('/sgabello5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello5.html');
})

app.get('/sgabello6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello6.html');
})

app.get('/sgabello7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello7.html');
})

app.get('/sgabello8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello8.html');
})

app.get('/sgabello9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello9.html');
})

app.get('/sgabello10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/sgabelli/sgabello10.html');
})

  //Smartphone

app.get('/note9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/note9.html');
})

app.get('/s10yb', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/s10yb.html');
})

app.get('/s10b', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/s10b.html');
})

app.get('/s10plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/s10plus.html');
})

app.get('/s9pluspb', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/s9pluspb.html');
})

app.get('/s9plusb', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/s9plusb.html');
})

app.get('/s9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/s9.html');
})

app.get('/j6plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/j6plus.html');
})

app.get('/j4plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/j4plus.html');
})

app.get('/a9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/a9.html');
})

app.get('/a7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/a7.html');
})

app.get('/mate20pro', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/mate20pro.html');
})

app.get('/mate20lite', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/mate20lite.html');
})

app.get('/p20lite', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/p20lite.html');
})

app.get('/p20', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/p20.html');
})

app.get('/y5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/y5.html');
})

app.get('/y7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/y7.html');
})

app.get('/psmart2019', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/psmart2019.html');
})

app.get('/psmart', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/psmart.html');
})

app.get('/7a', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/7a.html');
})

app.get('/8a', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/8a.html');
})

app.get('/xsmax256', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/xsmax256.html');
})

app.get('/xsmax64', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/xsmax64.html');
})

app.get('/xs', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/xs.html');
})

app.get('/xr', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/xr.html');
})

app.get('/8plus', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/8plus.html');
})

app.get('/6s', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/6s.html');
})

app.get('/a50', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/a50.html');
})

app.get('/a40', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/a40.html');
})

app.get('/a20', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/a20.html');
})

app.get('/a10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/a10.html');
})

app.get('/p30', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/p30.html');
})

app.get('/mate20', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/mate20.html');
})

app.get('/p20pro', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/p20pro.html');
})

app.get('/psmartz', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/psmartz.html');
})

app.get('/view10lite', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/view10lite.html');
})

app.get('/taba8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/taba8.html');
})

app.get('/taba10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/taba10.html');
})

app.get('/tabmaj7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/tabmaj7.html');
})

app.get('/tabmaj10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/telefoni/tabmaj10.html');
})


  //CONSOLE

app.get('/console1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/console/console1.html');
})

app.get('/console2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/console/console2.html');
})

app.get('/console3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/console/console3.html');
})


  //TV

app.get('/tv1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv1.html');
})

app.get('/tv2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv2.html');
})

app.get('/tv3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv3.html');
})

app.get('/tv4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv4.html');
})

app.get('/tv5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv5.html');
})

app.get('/tv6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv6.html');
})

app.get('/tv7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv7.html');
})

app.get('/tv8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv8.html');
})

app.get('/tv9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv9.html');
})

app.get('/tv10', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv10.html');
})

app.get('/tv11', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv11.html');
})

app.get('/tv12', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/smartphone_tv_acc/tv/tv12.html');
})

  //POLTRONE

app.get('/poltrona1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona1.html');
})

app.get('/poltrona2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona2.html');
})

app.get('/poltrona3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona3.html');
})

app.get('/poltrona4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona4.html');
})

app.get('/poltrona5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona5.html');
})

app.get('/poltrona6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona6.html');
})

app.get('/poltrona7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona7.html');
})

app.get('/poltrona8', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona8.html');
})

app.get('/poltrona9', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltrone/poltrona9.html');
})


  //POLTRONE UFFICIO

app.get('/poltronauff1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltroneuff/poltronauff1.html');
})

app.get('/poltronauff2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltroneuff/poltronauff2.html');
})

app.get('/poltronauff3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltroneuff/poltronauff3.html');
})

app.get('/poltronauff4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltroneuff/poltronauff4.html');
})

app.get('/poltronauff5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltroneuff/poltronauff5.html');
})

app.get('/poltronauff6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/poltroneuff/poltronauff6.html');
})



  //SALOTTI

app.get('/salotto1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto1.html');
})

app.get('/salotto2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto2.html');
})

app.get('/salotto3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto3.html');
})

app.get('/salotto4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto4.html');
})

app.get('/salotto5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto5.html');
})

app.get('/salotto6', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto6.html');
})

app.get('/salotto7', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/salotti/salotto7.html');
})

  //TAVOLI

app.get('/tavolo1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/tavoli/tavolo1.html');
})

app.get('/tavolo2', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/tavoli/tavolo2.html');
})

app.get('/tavolo3', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/tavoli/tavolo3.html');
})

app.get('/tavolo4', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/tavoli/tavolo4.html');
})

app.get('/tavolo5', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/tavoli/tavolo5.html');
})

  //LETTINI

app.get('/lettino1', function(req,res){
  res.sendFile(__dirname+'/public/prodotti/arredo/lettini/lettino1.html');
})



//ERROR 404

app.use(function(req,res){
  res.status(404);
  res.sendFile(__dirname+'/public/404.html');
})


app.listen(process.env.PORT || 3000);
