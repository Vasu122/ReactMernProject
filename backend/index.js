const express= require('express');
const app=express();
const mongoose=require('mongoose');
require("./db/conn");
const users=require("./models/userSchema");
const cors=require('cors');
const router=require("./routes/router");

app.use(cors());
app.use(express.json());
app.use(router);



app.get("/",(req,resp)=>{
    resp.send("app is working both front end and back end");
});
app.listen(5000);
