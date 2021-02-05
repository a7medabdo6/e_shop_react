import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function top_header() {
  return (
    <Navbar
      sticky="top"
      className="pt-5"
      style={{ backgroundColor: "#fff !important" }}
      expand="lg"
    >
      <Row style={{ width: "100%" }}>
        <div className="col-4 col-md-2">
          <Link to="/">
            <Navbar.Brand href="#home">
              <img
                className="w-100"
                src="https://niceonesa.com/_nuxt/img/b7efee5.png"
              />
            </Navbar.Brand>
          </Link>
        </div>

        <Form
          className="col-7 col-md-6 "
          inline
          style={{ marginRight: "10px", marginLeft: "10px" }}
        >
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 "
            style={{ width: "100%" }}
          />
        </Form>
        <div className="col-3 d-none d-sm-block" style={{ float: "right" }}>
          <Navbar.Brand style={{ marginTop: "11px" }} href="#home">
            <img src="https://niceonesa.com/_nuxt/img/a44ddd5.svg" /> Best
            Makeup website in Saudi Arabia
          </Navbar.Brand>
        </div>
      </Row>
    </Navbar>
  );
}

export default top_header;
