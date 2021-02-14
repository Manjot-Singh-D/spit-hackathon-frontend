import React, { useEffect, useState } from "react";

import EmployeeNavbar from "components/Navbars/EmployeeNavbar.js";
import EmployeeHeader from "components/Headers/EmployeeHeader.js";
import axios from "axios";

function EmployeePage() {
  const [data, setData] = useState([]);
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  useEffect(() => {
    axios
      .get("/backend/freeworking")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <EmployeeNavbar data={data} />
      <EmployeeHeader data={data} />
      <div className="main"></div>
    </>
  );
}

export default EmployeePage;
