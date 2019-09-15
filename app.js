var express = require('express')
var app = express()

var status = 'on';
app.get('/status', function (req, res) {
  res.send(status);
})

app.post('/status', function (req, res) {
  if(status == 'on'){
    status = 'off';
  }else{
    status = 'on';
  }
  res.send('Status updated');
})

app.listen(process.env.PORT || 5000)