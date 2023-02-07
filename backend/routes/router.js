const express= require("express");
const router = express.Router();
const users=require("../models/userSchema");

// router.get("/",(req,res)=>{
//     console.log("connect");
// });

/* register data code start here  */
router.post("/register", async(req,res)=>{
    const {userName,userEmail,userPassword} = req.body;

    if(!userName || !userEmail || !userPassword){
        res.status(404).json("please fill the data")
    }

    try{
        const preuser= await users.findOne({userEmail:userEmail});
        console.log(preuser);
        if(preuser){
            res.status(404).json("this user is already present");
        }
        else{
            const addUser= new users({
                userName:userName,
                userEmail:userEmail,
                userPassword:userPassword
            });

            await addUser.save();
            res.status(201).json(addUser);
            console.log(addUser);
        }

    }
    catch(error){
        res.status(404).json(error);
    }
});

/* register data code end  here  */

/* get UserData */
router.get("/getdata",async(req,res)=>{
    try{
        const userdata = await users.find();
        res.status(201).json(userdata);
        console.log(userdata)
    }
    catch(error){
        res.status(404).json(error)
    }
});

// get individual user start code here 

router.get("/getuser/:id", async(req,res)=>{
    try{
        console.log(req.params);
        const {id} = req.params;

        const userindividual = await users.findById({_id:id});
        console.log(userindividual);
        res.status(201).json(userindividual);
    }
    catch(error){
        res.status(404).json(error);
    }
});

// update user data

router.patch("/updateuser/:id", async(req,res)=>{
    try{
        const {id} = req.params;

        const updateduser= await users.findByIdAndUpdate(id,req.body,{
            new:true
        })
        console.log(updateduser);
        res.status(201).json(updateduser);
    }
    catch(error){
        res.status(404).json(error);
    }
});


// delete user code start here
router.delete("/deleteuser/:id", async(req,res)=>{
    try{
        const {id} = req.params;

        const deleteuser= await users.findByIdAndDelete({_id:id});
        console.log(deleteuser);
        res.status(201).json(deleteuser);
    }
    catch(error){
        res.status(404).json(error);
    }
});


module.exports=router