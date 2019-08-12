var express=require("express");
const app=express();
var multer=require("multer");
var upload=multer({dest:'uploads/'})
var type=upload.single('file1');

app.set("view engine", "ejs");

app.get("/",function(req,res){

    res.render("index");
})

app.post("/upload",type,function(req,res){

    res.send("File uploaded successfully..")
})

app.listen(8000,function(){
    console.log("Server started.")
})