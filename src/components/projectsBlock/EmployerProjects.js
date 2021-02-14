import React from "react";
import "./projectsBlock.css";
import Modal from "../Modal/Modal";

const EmployerProjects = (props) => {
  const triggeringFCN = () => {
    return <p>GO</p>;
  };
  const payTriggeringFCN = () => {
    return <p style={{ color: "green" }}>Pay</p>;
  };
  return (
    <div className="projectsBlock">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>{props.details.project}</h4>
        <Modal
          type="payToEmployee"
          data={props.data}
          triggerFCN={payTriggeringFCN()}
        />
        <Modal
          data={props.data}
          type="employerProjectsDetails"
          triggerFCN={triggeringFCN()}
        />
      </div>
    </div>
  );
};
export default EmployerProjects;
