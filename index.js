const express = require("express");

const app = express();

app.get("/calc",(req,res)=>{
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var c =a+b;
    res.send(c.toString());
});

app.listen(4050,()=>{
    console.log("hello server");
});