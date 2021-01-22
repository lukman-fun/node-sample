const express = require("express");
const app=express();

const PORT = process.env.PORT || 2000;

app.get("/", (req, res)=>{
    res.send("Hello Worlds");
})

app.listen(PORT, ()=>{
    console.log("Berjalan : http://localhost:"+PORT);
})