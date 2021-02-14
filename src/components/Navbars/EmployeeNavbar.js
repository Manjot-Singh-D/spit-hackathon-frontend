import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import logo from "../../images/PayEazy_Logo.png";
import Modal from "../Modal/Modal";
import { getUserDetails } from "../../Data/data";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function EmployeeNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const transferToFamily = () => {
    return (
      <span style={{ marginLeft: "5px", cursor: "pointer" }}>
        Transfer to Family/Friends
      </span>
    );
  };
  const transactionHistory = () => {
    return (
      <span style={{ marginLeft: "5px", cursor: "pointer" }}>
        Transaction History
      </span>
    );
  };
  return (
    <Navbar
      className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
    >
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            to="/"
            title="Coded by Creative Tim"
            style={{ padding: "0px" }}
            tag={Link}
          >
            <img src={logo} alt="logo" height="100px" width="auto" />
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span
              className="navbar-toggler-bar bar1"
              style={{ background: "#000" }}
            />
            <span
              className="navbar-toggler-bar bar2"
              style={{ background: "#000" }}
            />
            <span
              className="navbar-toggler-bar bar3"
              style={{ background: "#000" }}
            />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <Link to="/transactionHistoryF">
                <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                  <i className="nc-icon nc-book-bookmark" />
                  Transaction History
                </NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                <i className="nc-icon nc-book-bookmark" />
                <Modal
                  data={props.data}
                  triggerFCN={transferToFamily()}
                  type="sendToFamilyFriends"
                />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "#000000", cursor: "pointer" }}>
                <i className="nc-icon nc-book-bookmark" /> Hello
                {getUserDetails().name}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default EmployeeNavbar;
