var express = require('express')
var app = express()
app.use(express.static('.'))
 
    
   

app.get('/', function (req, res) {
   
    
    
    
    
 res.sendFile(__dirname+'/index.html');
})
var id= parseInt('56');
app.get('/add', function(req, res){
    
    var ans=parseInt(req.query.num1)+parseInt(req.query.num2);
    console.log(req.query.num1,req.query.num2,ans);
    res.send(ans+"");
        })

var port=process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
