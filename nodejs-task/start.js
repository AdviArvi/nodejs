const express = require('express');
const mongoose = require('mongoose');

const app = express();

// const arr=[];

const obj={
  user:process.env.user,
  pass:process.env.pass,
  PORT:process.env.PORT
}

app.set('port', process.env.PORT);
// arr.push(process.env.user);
// arr.push(process.env.pass);
// arr.push(process.env.PORT);

app.get('/',function(req,res){
  
  // res.send("user:"+process.env.user+" "+"pass:"+process.env.pass+" "+"port:"+process.env.PORT);
  res.send("user:" +obj.user+" "+"pass:" +obj.pass+" "+"port:"+obj.PORT);
  })
const server = app.listen(app.get('port'), () => {
 
  console.log(`Express running → PORT ${server.address().port}`);
});


