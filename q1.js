const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/gethello", (req,res) => {
    res.send("helloooo !! its message from ajax");
});

app.listen("1111", ()=> {
    console.log("server running at 1111");
});
