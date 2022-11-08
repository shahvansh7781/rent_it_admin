import React, { useState, useEffect } from "react";
import "./UserList.css";

import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Search } from "@mui/icons-material";

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // const array = []

  // const newData = array.concat(search(data))

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150,flex:0.2 },
    // {
    //   field: "avtar",
    //   headerName: "Profile",
    //   width: 130,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.avtar} alt="" />
    //       </div>
    //     );
    //   },
    // },

    {
      field: "username",
      headerName: "Name",
      minWidth: 130,
      flex:0.2
      // renderCell: (params) => {
      //   return (
      //     <div className='userListUser'>
      //       <img className='userListImg' src={params.row.avtar} alt='' />
      //       {params.row.username}{' '}
      //     </div>
      //   )
      // },
    },
    { field: "email", headerName: "Email-ID", minWidth: 150,flex:0.1 },
    {
      field: "role",
      headerName: "Role",
      flex:0.1,
      minWidth: 90,
    },

    {
      field: "action",
      headerName: "Action",
      flex:0.2,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const [query, setQuery] = useState("");

  const keys = ["User", "Email-ID"];

  const search = (data) => {
    return data.filter((item) => keys.some((key) => item[key](query)));
  };

  return (
    <div className="userList">
      {/* <div className='search'>
        <div className='searchRight'>
          <input
            type='text'
            placeholder='Search...'
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        <div className='searchLeft'>
          <Search className='searchIcon' />
        </div>
      </div> */}
      {/* console.log(Search(data)) */}
      <DataGrid
        style={{ color: "#EEEEEE", height: "95vh" }}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        // pageSize={8}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
