import React from "react";
import "./newProduct.css";

import emailjs from "@emailjs/browser";

export default function newProduct() {
  return (
    <div className="newproduct">
      <h1 className="addProductTitle">Add New Car</h1>
      <form
        className="addProductForm"
        method="post"
        action="/myapp/admin/car/new"
      >
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" name="file" />
        </div>
        <div className="addProductItem">
          <label>Car Name</label>
          <input type="text" placeholder="Tata Nexon" name="title" required />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea
            name="description"
            id=""
            cols="60"
            rows="7"
            required
          ></textarea>
        </div>
        <div className="addProductItem">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexFlow: "row",
            }}
          >
            <div className="addProductItem1" style={{ marginLeft: 0 }}>
              <label>Rent</label>

              <input type="text" name="rent" required />
            </div>
            <div className="addProductItem1">
              <label>Featured</label>

              <select name="featured" id="">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>Number Plate</label>

              <input
                type="text"
                placeholder="GJ 06 NM 9303"
                name="noPlate"
                required
              />
            </div>
          </div>
        </div>

        <div className="addProductItem">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexFlow: "row",
            }}
          >
            <div className="addProductItem1" style={{ marginLeft: "0px" }}>
              <label>Company</label>
              <br />
              <select name="company" id="" required>
                <option value="Tata">Tata</option>
                <option value="Hyundai">Hyundai</option>
                <option value="Maruti">Maruti Suzuki</option>
                <option value="Toyota">Toyota</option>
                <option value="Mahindra">Mahindra</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>Model</label>
              <br />
              <select name="model" id="" required>
                <optgroup label="Tata Models">
                  <option value="Nexon">Nexon</option>
                  <option value="Harrier">Harrier</option>
                  <option value="Altroz">Altroz</option>
                  <option value="Tigor">Tigor</option>
                </optgroup>
                <optgroup label="Hyundai Models">
                  <option value="Tucson">Tucson</option>
                  <option value="Creta">Creta</option>
                  <option value="Venue">Venue</option>
                  <option value="Verna">Verna</option>
                </optgroup>
                <optgroup label="Maruti Suzuki Models">
                  <option value="Eeco">Eeco</option>
                  <option value="Ertiga">Ertiga</option>
                  <option value="Swift">Swift</option>
                </optgroup>
                <optgroup label="Toyota Models">
                  <option value="Fortuner">Fortuner</option>
                  <option value="Innova">Innova</option>
                </optgroup>
                <optgroup label="Mahindra Models">
                  <option value="Scorpio">Scorpio</option>
                  <option value="Bolero">Bolero</option>
                  <option value="XUV700">XUV700</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="number" placeholder="3" name="stock" required />
        </div>
        <div className="addProductItem">
          <label>Features</label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexFlow: "row",
            }}
          >
            <div className="addProductItem1" style={{ marginLeft: "0px" }}>
              <label>Color</label>
              <input type="text" placeholder="" name="colour" required />
            </div>
            &nbsp;
            <div className="addProductItem1">
              <label>Seats</label>
              <input type="number" placeholder="" name="seats" required />
            </div>
            <div className="addProductItem1">
              <label>Gear</label>
              <select name="gear" id="">
                <option value="Manual">Manual</option>
                <option value="Auto">Automatic</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>Fuel Type</label>
              <select name="fuelType" id="">
                <option value="Manual">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Gas">Gasoline</option>
              </select>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div className="addProductItem1" style={{ marginLeft: "0px" }}>
              <label>AC</label>
              <select name="airConditioner" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>GPS</label>
              <select name="gps" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>USB</label>
              <select name="usb" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>Radio</label>
              <select name="radio" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="addProductItem1">
              <label>Parking Sensor</label>
              <select name="parkingSensor" id="">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
