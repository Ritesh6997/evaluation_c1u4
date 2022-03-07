const express=require("express");
const app=express();
app.use(logger)
app.get("/books",(req,res)=>{
    return res.send ("printing all the books");
})

app.get("/libraries",checkPermissions("librarian"),(req,res)=>{
    return res.send(req.permission);
});
app.get("/authors",checkPermissions("author"),(req,res)=>{
    return res.send(req.permission);
})
function logger(req,res,next){
    console.log("logger");
    next();
}
function checkPermissions(x){
    return function logger(req,res,next){
        if (x=="librarian")
        {
            req.permission=true;
        }
        else if (x=="author"){
            req.permission=true;
        }
        next()
    }
}


function  logger1(req,res,next){
    next();
}

app.listen(5000,()=>{
    console.log("listing to port 5000");
})