var express = require('express')
var app = express()
var path = require('path')

var status = 'on';
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/js'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/home.html'));
})

app.get('/status', function (req, res) {
  res.status(200);
  res.json({"status": status});
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