const express = require('express');
const mongoose = require('mongoose');

const app = express();

process.env.PORT=7700

// const app = require('./app');
app.set('port', process.env.PORT);
app.get('/',function(req,res){
  const env={
    user:"Shital",
    pass:"sk",
    port:7700
  }
  res.send("user:"+ env.user+" "+"pass:"+env.pass+" "+"port:"+env.port);
  
  })
const server = app.listen(app.get('port'), () => {
 
  console.log(`Express running → PORT ${server.address().port}`);
});

