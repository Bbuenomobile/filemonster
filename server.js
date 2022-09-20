const express = require('express');
const path = require("path");
const app = express();
const PORT = 8100;
const cors = require('cors');

app.use(cors());
app.use(express.static("uploads"));

app.get("/" , (req,res,next) => {
    res.send("Serving Files!");
})
  
app.listen(PORT, (err) =>{
    if (!err) {
        console.log("Files Serving At :8100");
        console.log("From - ", "/uploads");
    } else {
        console.log(err);
    }
});