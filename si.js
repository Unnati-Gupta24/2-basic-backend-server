const express = require("express");

const app = express();

app.get("/cal",(req,res)=>{
    var p = parseInt(req.query.p);
    var r = parseInt(req.query.r);
    var t = parseInt(req.query.t);
    var si = (p*r*t)/100;
    res.send(si.toString());
});

app.listen(4010,()=>{
    console.log("hello server");
});