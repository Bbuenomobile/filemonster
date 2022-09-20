const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8100;
const cors = require('cors');

app.use(cors());

app.get("/uploads/:file", (req,res,next) => {
    console.log(req.params.file);
    res.sendFile(`/uploads/${req.params.file}`, (err) => {
        if (!err) {
            console.log("File Sent!");
        } else {
            console.log(err);
        }
    })
})

app.listen(PORT, (err) =>{
    if (!err) {
        console.log("Files Serving At :8100");
    } else {
        console.log(err);
    }
});