const express = require("express");
const app = express();

app.use(express.static("static/q2.html"));

app.listen("1111" , ()=>{
    console.log("server port : 1111");
});