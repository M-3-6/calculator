var express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result;
  var operation=req.body.operation;
  switch(operation){
    case "+":
    result=num1+num2;
    break
    case "-":
    result = num1-num2;
    break
    case "*":
    result = num1*num2;
    break
    case "/":
    result = num1/num2;
    break
  }
  res.send("the result is: "+result);
});
app.listen(process.env.PORT||3000,function(){
  console.log("server has started");
});
