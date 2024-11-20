const express = require("express")
var app = express()
app.get("/",function(request,response){
console.log("Hello World!!")

response.send("Welcome To Node JS. Hello World!")
})
app.listen(8000, function () {
console.log("Started application on port %d", 8000)
});