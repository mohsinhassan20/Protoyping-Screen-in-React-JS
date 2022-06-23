import { Button } from "bootstrap";
import Navbar from "./Navbar";
import Box from "./Cards";
import "./DashboardMain.css";
import Table from "./Table";
const box = {
  color: "rgb(50, 96, 168)",
  fontSize: "50px",
};

const box2 = {
  color: "black",
  fontSize: "23px",
};

const DashboardMain = () => {
  return (
    <>
      <Navbar />
      <h1 style={box}>
        Dashboard
        <span className="form-control">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="fa fa-search"></i>
        </span>
      </h1>
      <h1 style={box2} className="text-center">
        Goods Details
      </h1>

      <div className="continer-fluid d-flex flex-row justify-content-around rounded pt-5">
        <Box />
        <Box />
        <button />
      </div>
    </>
  );
};

export default DashboardMain;
