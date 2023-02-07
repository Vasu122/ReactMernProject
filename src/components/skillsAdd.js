import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const SkillsAdd = () => {
  const [inpval,setINP] =useState({
    name:"",
    email:"",
    age:""
  });
  const setData=(e)=>{
    debugger
    console.log(e.target.value);
    const {name,value}=e.target;
    setINP( (preval)=>{
      return{
        ...preval,
        [name]:value
      }
    })
  }
  return (
    <form>
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        onChange={setData}
        name="name"
      />
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        onChange={setData}
        name="email"
      />
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        onChange={setData}
        name="age"
      />
      <Button variant="contained" color="primary">Submit</Button>
      <h1>qfewgf</h1>
      <p>{inpval.name} </p>
    </form>
  );
};


export default SkillsAdd;