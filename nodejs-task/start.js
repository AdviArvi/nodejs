const express = require('express');
const mongoose = require('mongoose');

const app = express();

const arr=[];

app.set('port', 7700);
arr.push(process.env.user);
arr.push(process.env.pass);
arr.push(process.env.port);

app.get('/',function(req,res){
  
  res.send("user:"+process.env.user+" "+"pass:"+process.env.pass+" "+"port:"+process.env.port);
  
  })
const server = app.listen(app.get('port'), () => {
 
  console.log(`Express running → PORT ${server.address().port}`);
});


