import React, { useState } from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import axios from "axios";
import { conditionallyUpdateScrollbar } from "reactstrap/lib/utils";
import { setUserDetails } from "../../Data/data";

function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/backend/emplogin", user)
      .then((res) => {
        setUserDetails(res.data.name, res.data.email, res.data.current_balance);
      })
      .catch((err) => console.log(err));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="page-header" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Employer Login</h3>
                <Form className="register-form" onSubmit={handleSubmit}>
                  <label>Email</label>
                  <Input
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <label>Password</label>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                  <Button block className="btn-round" color="danger">
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
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

export default LoginPage;
