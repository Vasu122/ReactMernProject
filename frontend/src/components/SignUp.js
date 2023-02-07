import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignUp =()=>{
    const [userName,setUserName] =useState();
    const [userEmail,setUserEmail] =useState();
    const [userPassword,setUserPassword] =useState();
    
    let navigate = useNavigate();

    const collectData =async(e)=>{
        e.preventDefault();
        console.warn(userName,userEmail, userPassword);
        const res=await fetch("http://localhost:5000/register",{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify({
                userName:userName,
                userEmail:userEmail,
                userPassword:userPassword
            })
        });

        const data= await res.json();
        console.log(data);

        if(res.status === 404 || !data){
            alert("error");
            console.log("error");
        }
        else{
            alert("data added");
            navigate("/");
            console.log("data added");
        }
    }
    return(
        <div className="register">
            <h1>register</h1>

            <input type="text" placeholder="enter name" onChange={(e) => setUserName(e.target.value)} /> <br /><br />
            <input type="text" placeholder="enter email"  onChange={(e) => setUserEmail(e.target.value)} /><br /><br />
            <input type="text" placeholder="enter password"  onChange={(e) => setUserPassword(e.target.value)} /><br /><br />
            <button type="button" onClick={collectData} >SignUp</button>
            
        </div>
    )
}

export default SignUp;