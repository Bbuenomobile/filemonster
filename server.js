const express = require('express');
const path = require("path");
const app = express();
const PORT = 8100;


app.use(express.static(path.join(__dirname,"uploads")));

app.get("/" , (req,res,next) => {
    res.send("Serving Files!");
})
  
app.listen(PORT, (err) =>{
    if (!err) {
        console.log("Files Serving At :8100");
    } else {
        console.log(err);
    }
});