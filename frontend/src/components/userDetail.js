import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../common/Loader";
const UserDetail = () => {
  const [getUserData, setUserData] = useState([]);
  const [loader, setLoader] = useState(false);
  console.log("getUserData", getUserData);

  const { id } = useParams("");
  const getData = async () => {
    setLoader(true);
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
      setUserData(data);
      console.log("get Data");
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    <Loader loader={loader}/>
      <div className="userDetails">
        <h1>Name: {getUserData.userName}</h1>
        <h2>Email: {getUserData.userEmail}</h2>
        <h3>Password:{getUserData.userPassword}</h3>
      </div>
    </>
  );
};

export default UserDetail;
