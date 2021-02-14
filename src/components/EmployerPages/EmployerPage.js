import React, { useState, useEffect } from "react";

import EmployerNavbar from "components/Navbars/EmployerNavbar.js";
import EmployerHeader from "components/Headers/EmployerHeader.js";
import axios from "axios";
import { getUserDetails } from "../../Data/data";

function EmployerPage() {
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
      .get("/backend/projectworking", getUserDetails().email)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <EmployerNavbar data={data} />
      <EmployerHeader data={data} />
    </>
  );
}

export default EmployerPage;
