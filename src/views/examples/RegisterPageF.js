import React, { useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../config/firebaseConfig";
import axios from "axios";
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };
  const registerForm = (e) => {
    e.preventDefault();
    console.log("Registering");
    axios
      .post("/backend/freeprofile", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Freelancer Register</h3>
                <Form className="register-form" onSubmit={registerForm}>
                  <label>Name</label>
                  <Input
                    onChange={handleChange}
                    placeholder="text"
                    type="text"
                    name="name"
                    value={user.name}
                  />
                  <label>Email</label>
                  <Input
                    onChange={handleChange}
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={user.email}
                  />

                  <label>Password</label>
                  <Input
                    onChange={handleChange}
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                  />
                  <label>Address</label>
                  <Input
                    onChange={handleChange}
                    placeholder="text"
                    type="text"
                    name="address"
                    value={user.address}
                  />
                  <Button block className="btn-round" color="danger">
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RegisterPage;
