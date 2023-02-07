import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const UserList = () => {
  const [getUserData, setUserData] = useState([]);
  console.log("getUserData", getUserData);

  const getData = async (e) => {
    const res = await fetch("/getdata", {
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
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    });

    const deletedata = await res2.json();

    if (res2.status === 404 || !deletedata) {
      console.log("error");
    } 
    else {
      console.log("get Data");
      getData();
    }


  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"> Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getUserData.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.userName}</TableCell>
              <TableCell>{row.userEmail}</TableCell>
              <TableCell>{row.userPassword}</TableCell>
              <TableCell>
                <Link to={`UserDetail/${row._id}`}>Detail</Link>
              </TableCell>
              <TableCell>
                <Link to={`edit/${row._id}`}>Edit</Link>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>deleteuser(row._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
