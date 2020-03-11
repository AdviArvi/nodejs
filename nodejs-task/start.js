const express = require('express');
const mongoose = require('mongoose');

const app = express();

process.env.PORT=7700

// const app = require('./app');
app.set('port', process.env.PORT);
app.get('/',function(req,res){
  res.send(process.env.PORT);
  })
const server = app.listen(app.get('port'), () => {
 
  console.log(`Express running → PORT ${server.address().port}`);
});

