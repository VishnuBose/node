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


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
