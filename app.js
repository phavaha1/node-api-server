var express = require('express')
var app = express()

var status = 'on';
app.get('/', function (req, res) {
  if(status=='on'){
    status = 'off';
  }else{
    status = 'on';
  }
  res.send(status)
})

app.listen(process.env.PORT || 5000)