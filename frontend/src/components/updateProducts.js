import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SignUp = () => {
  //   const [getUserData, setUserData] = useState([]);

  //   const [userName, setUserName] = useState();
  //   const [userEmail, setUserEmail] = useState();
  //   const [userPassword, setUserPassword] = useState();

  const [inpval, setINP] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  let navigate = useNavigate();

  const { id } = useParams("");

  const getData = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    if (res.status === 404 || !data) {
      console.log("error");
    } else {
      setINP(data);
      console.log("get Data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const updateuser = async (e) => {
    debugger
    const { userName, userEmail, userPassword} = inpval;

    const res2 = await fetch(`/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
      },

      body:JSON.stringify({
        userName, userEmail, userPassword
      })
    });

    const data2 = await res2.json();
    console.log(data2);

    if(res2.status === 404 || !data2){
        alert("fill the data")
        console.log("error")
    }
    else{
        alert("data added")
        navigate("/");
        console.log("get Data");
    }


  };
  return (
    <div className="register">
      <h1>register</h1>
      <input
        type="text"
        placeholder="enter name"
        name="userName"
        value={inpval.userName}
        onChange={setData}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="enter email"
        name="userEmail"
        value={inpval.userEmail}
        onChange={setData}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter password"
        name="userPassword"
        value={inpval.userPassword}
        onChange={setData}
      />
      <br />
      <br />
      <button type="button" onClick={updateuser}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
