const json  = require("express");
const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const Register = require("./models/photos");
const port = process.env.PORT || 3000;




const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path))

app.get("/",(req,res)=>{
   res.render("index")
});


app.get("/contact",(req,res)=>{
    res.render("contact")
 });


 app.post("/contact", async (req,res)=>{
   try{
       const custmers = new Register({
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        Email:req.body.Email,
        Subject:req.body.Subject,
        Message:req.body.Message,
       })

       const registered = await custmers.save(); 
       res.status(201).render("index");

   }catch(error){
    res.status(400).send(error);
   }
 });

app.listen(port,()=>{
    console.log(`server is running at pory no ${port}`);
})