import React, { useEffect, useState } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import "./Modal.css";
import axios from "axios";
import { getUserDetails } from "../../Data/data";

function ModalExampleCloseIcon(props) {
  const [open, setOpen] = React.useState(false);
  const [projectdetails, setProjectsDetails] = useState({
    sno: "",
    free_name: "",
    free_email: "",
    project: "",
    date_started: "",
    deadline: "",
    days_hours_work: "",
    rate_day_hour: "",
    proposed_amount: "",
  });
  const [transferDetails, setTransferDetails] = useState({
    name: "",
    email: "",
    amount: "",
    address: "",
    private_key: "",
    free_email: "",
  });
  const handleChangeTransferDetails = (e) => {
    const { name, value } = e.target;
    setTransferDetails((prevTransferDetails) => {
      return {
        ...prevTransferDetails,
        [name]: value,
      };
    });
  };
  const [employerProjects, setEmployerProjects] = useState({});
  const [newProject, setnewProject] = useState({
    emp_name: "",
    emp_email: "",
    free_name: "",
    free_email: "",
    project: "",
    date_started: "",
    deadline: "",
    no_days_hours: "",
    rate_day_hour: "",
    proposed_amount: "",
    free_address: "",
  });
  const handleChangeAddingNewProject = (e) => {
    const { name, value } = e.target;
    setnewProject((prevNewProject) => {
      return {
        ...prevNewProject,
        [name]: value,
      };
    });
  };
  const handleSubmitNewProject = () => {
    axios
      .post("/backend/addproject", newProject)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    if (props.type === "projectBlock") setProjectsDetails(props.data);
    else if (props.type === "sendToFamilyFriends") {
      axios
        .get("/backend/transfer", transferDetails)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }, []);
  const sendToFriendsFamily = () => {
    return (
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={handleChangeTransferDetails}
          name="name"
          value={transferDetails.name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={handleChangeTransferDetails}
          name="email"
          value={transferDetails.email}
        />
        {/* <input
          type="text"
          placeholder="current balance"
          name="curr_balance"
          value={getUserDetails().balance}
        /> */}
        <input
          type="text"
          placeholder="amount to send"
          onChange={handleChangeTransferDetails}
          name="amount"
          value={transferDetails.amount}
        />
        <input
          type="text"
          placeholder="address"
          onChange={handleChangeTransferDetails}
          name="address"
          value={transferDetails.address}
        />
        <input
          type="text"
          placeholder="private key"
          onChange={handleChangeTransferDetails}
          name="private_key"
          value={transferDetails.private_key}
        />
      </form>
    );
  };
  const transactionHistory = () => {
    return (
      <form>
        <div>
          <p>Project </p>
          <input type="text " />
        </div>
        <div>
          <p>Work Started On</p>
          <input type="text " />
        </div>
        <div>
          <p>Deadline</p>
          <input type="text " />
        </div>
        <div>
          <p>No. of days/hours work</p>
          <input type="text " />
        </div>
        <div>
          <p>rate per hour</p>
          <input type="text " />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input type="text " />
        </div>
        <div>
          <p>No. of leaves/hours delayed </p>
          <input type="text " />
        </div>
        <div>
          <p>Amount paid</p>
          <input type="text " />
        </div>
        <div>
          <p>Rate for Leaves/hours delayed</p>
          <input type="text " />
        </div>
        <div>
          <p>Account of Employee</p>
          <input type="text " />
        </div>
      </form>
    );
  };
  const projectDetails = () => {
    return (
      <form>
        <div>
          <p>Name </p>
          <input type="text " value={projectdetails.free_name} />
        </div>
        <div>
          <p>Email</p>
          <input type="text " value={projectdetails.free_email} />
        </div>
        <div>
          <p>Project Name</p>
          <input type="text " value={projectdetails.project} />
        </div>
        <div>
          <p>Work started on</p>
          <input type="text " value={projectdetails.date_started} />
        </div>
        <div>
          <p>Deadline</p>
          <input type="text " value={projectdetails.deadline} />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input type="text " value={projectdetails.rate_day_hour} />
        </div>
        <div>
          <p>no of days/hours to work</p>
          <input type="text " value={projectdetails.days_hours_work} />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input type="text " value={projectdetails.proposed_amount} />
        </div>
      </form>
    );
  };
  const employerCurrentProjects = (project) => {
    return (
      <form>
        <div>
          <p>Name </p>
          <input type="text " value={project.emp_name} />
        </div>
        <div>
          <p>Email</p>
          <input type="text " value={project.emp_email} />
        </div>
        <div>
          <p>Project Name</p>
          <input type="text " value={project.project} />
        </div>
        <div>
          <p>Work started on</p>
          <input type="text " value={project.date_started} />
        </div>
        <div>
          <p>Deadline</p>
          <input type="text " value={project.deadline} />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input type="text " value={project.rate_day_hour} />
        </div>
        <div>
          <p>no of days/hours to work</p>
          <input type="text " value={project.days_hours_work} />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input type="text " value={project.proposed_amount} />
        </div>
      </form>
    );
  };
  const addNewProject = () => {
    return (
      <form>
        <div>
          <p>Name </p>
          <input
            type="text "
            name="emp_name"
            value={newProject.emp_name}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="text "
            name="emp_email"
            value={newProject.emp_email}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Project Name</p>
          <input
            type="text "
            name="project"
            value={newProject.project}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Work started on</p>
          <input
            type="text "
            name="date_started"
            value={newProject.date_started}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Deadline</p>
          <input
            type="text "
            name="deadline"
            value={newProject.deadline}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input
            type="text "
            name="rate_day_hour"
            value={newProject.rate_day_hour}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>no of days/hours to work</p>
          <input
            type="text "
            name="no_days_hours"
            value={newProject.no_days_hours}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input
            type="text "
            name="proposed_amount"
            value={newProject.proposed_amount}
            onChange={handleChangeAddingNewProject}
          />
        </div>
        <div>
          <p>Address of Employee</p>
          <input
            type="text "
            name="free_address"
            value={newProject.free_address}
            onChange={handleChangeAddingNewProject}
          />
        </div>
      </form>
    );
  };
  const payToEmployee = () => {
    return (
      <form>
        <div>
          <p>Name </p>
          <input type="text " name="name" />
        </div>
        <div>
          <p>Email</p>
          <input type="text " name="email" />
        </div>
        <div>
          <p>Project Name</p>
          <input type="text " name="" />
        </div>
        <div>
          <p>Number of days/hours worked on</p>
          <input type="text " />
        </div>
        <div>
          <p>Rate per hour/day</p>
          <input type="text " />
        </div>
        <div>
          <p>Proposed Amount</p>
          <input type="text " />
        </div>
        <div>
          <p>No. of leaves/delayed hours deduction</p>
          <input type="text " />
        </div>
        <div>
          <p>Private Key</p>
          <input type="text " />
        </div>
      </form>
    );
  };
  return (
    <Modal
      style={{
        zIndex: "10000",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "10%",
        height: "max-content",
      }}
      closeIcon
      open={open}
      trigger={props.triggerFCN}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header
        // icon="archive"
        content={
          props.type === "projectBlock"
            ? "Project Details"
            : props.type === "sendToFamilyFriends"
            ? "Send to Family And Friends"
            : props.type === "addNewProject"
            ? "Add new Project"
            : props.type === "employerProjectsDetails"
            ? "Appointed Employee"
            : props.type === "payToEmployee"
            ? "Pay to Employee"
            : props.type === "transactionHistory"
            ? "Your Transaction History"
            : ""
        }
      />
      <Modal.Content>
        {props.type === "projectBlock"
          ? projectDetails()
          : props.type === "sendToFamilyFriends"
          ? sendToFriendsFamily()
          : props.type === "addNewProject"
          ? addNewProject()
          : props.type === "employerProjectsDetails"
          ? employerCurrentProjects(props.data)
          : props.type === "payToEmployee"
          ? payToEmployee()
          : props.type === "transactionHistory"
          ? transactionHistory()
          : ""}
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="green"
          onClick={() => {
            setOpen(false);
            if (props.type === "addNewProject") {
              handleSubmitNewProject();
            }
          }}
        >
          <Icon name="checkmark" />
          {props.type === "projectBlock"
            ? "Close"
            : props.type === "sendToFamilyFriends"
            ? "Send"
            : props.type === "addNewProject"
            ? "Create"
            : props.type === "employerProjectsDetails"
            ? "Go to payment page"
            : props.type === "payToEmployee"
            ? "Pay"
            : props.type === "transactionHistory"
            ? "Close"
            : ""}
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalExampleCloseIcon;
