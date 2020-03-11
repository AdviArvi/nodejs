const express = require('express');
const mongoose = require('mongoose');

const app = express();

const env=[];

app.set('port', process.env.PORT);
env.push(process.env.user);
env.push(process.env.pass);
env.push(process.env.port);

app.get('/',function(req,res){
  
  res.send("user:"+process.env.user+" "+"pass:"+process.env.pass+" "+"port:"+process.env.port);
  
  })
const server = app.listen(app.get('port'), () => {
 
  console.log(`Express running → PORT ${server.address().port}`);
});


