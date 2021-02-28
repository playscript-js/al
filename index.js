app=require("express")();
const http = require('http');
const port = process.env.PORT || 3000

app.get("/",(req,res)=>{
res.send("hello faifai!")
})
app.listen(port,e=>{console.log("ready")})
