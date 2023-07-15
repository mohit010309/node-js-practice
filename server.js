const express=require('express');
const app=express();
app.listen(3000,function(){
    console.log("Server started on port 3000");
});
app.get("/",function(req,res){
    res.send("Hello MohAkh");
    
});
app.get("/About%20Me",function(req,res){
    res.send("This is the About Me Page : mohitakhouri0901@gmail.com");
});
app.get("/About23",function(req,res){
    res.send("This is about 23 page");
});
app.get("/ABOUT",function(req,res){
    res.send("This is simple about me page on Mohit Akhouri");
});
app.get("/about/contact",function(req,res){
    res.send("This is contacts : 7985163787 inside about me page");
});