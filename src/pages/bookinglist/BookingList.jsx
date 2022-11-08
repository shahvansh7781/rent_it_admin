import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookingList.css";

import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../data";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

export default function BookingList() {
  // const [data, setData] = useState(productRows);
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    // const cars1 = [];
    // await axios.get("/myapp/cars").then((car) => {
    //   Object.values(car.data)[1].map((e) => {
    //     cars1.push({
    //       id: e._id,
    //       title: e.title,
    //       noPlate: e.noPlate,
    //       stock: e.stock,
    //       rent: e.rent,
    //       key:e._id
    //     });
    //   });
    //   setCars(cars1);
    // });
  };
  useEffect(() => {
    getCars();
  }, []);

  const handleDelete = (id) => {
    setCars(cars.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "Booking ID", minWidth: 180,flex:0.2 },
    // {
    //   field: "img",
    //   headerName: "Image",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div className="userListUser">
    //         <img className="userListImg" src={params.row.img} alt="" />
    //       </div>
    //     );
    //   },
    // },
    {
      field: "title",
      headerName: "Car ID",
      minWidth: 180,flex:0.2
      // renderCell: (params) => {
      //   return (
      //     <div className='productListItem'>
      //       <img className='productListImg' src={params.row.img} alt='' />
      //       {params.row.name}{' '}
      //     </div>
      //   )
      // },
    },
    { field: "noPlate", headerName: "User ID", minWidth: 180,flex:0.2 },
    {
      field: "rent",
      headerName: "Amount",
flex:0.1,
      minWidth: 160,
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + params.row.id}>
    //           <button className="productListEdit">Edit</button>
    //         </Link>

    //         <DeleteOutlineIcon
    //           className="productListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];
  return (
    <div className="productList">
      <DataGrid
        style={{ color: "#EEEEEE", height: "95vh" }}
        rows={cars}
        disableSelectionOnClick
        columns={columns}
        // pageSize={8}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
