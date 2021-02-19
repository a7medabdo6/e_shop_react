import React from "react";
import { Link } from "react-router-dom";
import { Card, Step, Button, Form, Radio, Image } from "semantic-ui-react";

export default class payment extends React.Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  render() {
    const steps = [
      {
        key: "Address",
        icon: "truck",

        title: "Address",
        description: "egypt ,assuit,123 street",
      },
      {
        key: "payment",
        active: true,
        completed: true,
        icon: "payment",
        title: "payment",
        description: "Enter billing information",
      },
      { key: "confirm", icon: "info", title: "Confirm Order" },
    ];
    return (
      <div className="mt-5 pt-5  mb-5 pb-5">
        <div className="row">
          <div className="w-100 m-5 col-12 text-center">
            <Step.Group items={steps} />
          </div>
          <div className="col-md-8">
            <h3 className="ml-5 ">Address</h3>

            <Card.Group className="col-md-12 col-12 m-5">
              <Card
                className="margin-auto"
                style={{
                  textAlign: "left",
                  width: "100%",
                  display: "inline-block",
                  margin: "auto",
                }}
              >
                <Card.Content>
                  <Card.Header>Steve Sanders</Card.Header>
                  <Card.Meta>Friends of Elliot</Card.Meta>
                  <Card.Description>
                    Steve wants to add you to the group{" "}
                    <strong>best friends</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div
                    className="ui two buttons"
                    style={{ display: "inline-block", textAlign: "right" }}
                  >
                    <Button
                      style={{ width: "20%" }}
                      basic
                      color="red"
                      className="m-1"
                    >
                      <Link
                        style={{
                          display: "inline-block",

                          width: "100%",
                        }}
                      >
                        Change
                      </Link>
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            </Card.Group>
            <div className="col-md-12 col-12 p-5 m-5 paymentMethods">
              <h3>Payment Methods</h3>
              <Form>
                <Form.Field>
                  <Radio
                    label="cash on dilvery"
                    name="radioGroup"
                    value="this"
                    checked={this.state.value === "this"}
                    onChange={this.handleChange}
                  />
                  <br />
                  <span>Service : AED 55.5$</span>
                </Form.Field>
                <hr />
                <Form.Field>
                  <Radio
                    label="Credit / Master Card"
                    name="radioGroup"
                    value="that"
                    checked={this.state.value === "that"}
                    onChange={this.handleChange}
                  />
                  <br />
                  <span>Service : AED 55.5$</span>
                </Form.Field>
              </Form>
            </div>

            <div className="col-md-12 col-12 m-5 p-0 w-100">
              <hr />
              <article className="d-flex wight-cart align-items-center no-gutters">
                <div className="thumb col-auto px-1">
                  <img
                    src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/49201240_epublic Aloe-500x500.png"
                    alt="Nature Republic Aloe Vera Soothing Gel - 300ml"
                  />
                </div>
                <div className="details no-gutters ">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="title">
                        Nature Republic Aloe Vera Soothing Gel - 300ml
                      </h3>
                    </div>
                  </div>
                  <p className="single-price text-black">AED37.20</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="counter-section">
                        <img src="" alt="" className="sub" />
                        <span className="counter">3</span>
                        <img
                          src="data:image/svg+xml;base64,/+=="
                          alt=""
                          className="add"
                        />
                      </div>
                      <div className="note-cart pt-1"></div>
                    </div>
                    <p className="total-price">AED111.61</p>
                  </div>
                </div>
              </article>
              <hr />
              <article className="d-flex wight-cart align-items-center no-gutters">
                <div className="thumb col-auto px-1">
                  <img
                    src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/49201240_epublic Aloe-500x500.png"
                    alt="Nature Republic Aloe Vera Soothing Gel - 300ml"
                  />
                </div>
                <div className="details no-gutters ">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="title">
                        Nature Republic Aloe Vera Soothing Gel - 300ml
                      </h3>
                    </div>
                  </div>
                  <p className="single-price text-black">AED37.20</p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <div className="counter-section">
                        <img src="" alt="" className="sub" />
                        <span className="counter">3</span>
                        <img
                          src="data:image/svg+xml;base64,/+=="
                          alt=""
                          className="add"
                        />
                      </div>
                      <div className="note-cart pt-1"></div>
                    </div>
                    <p className="total-price">AED111.61</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="ml-5 ">Summary</h3>
            <div className="ml-5 mr-5 mb-5 white p-5 mt-5">
              <p>
                sub-total : <span className="float-right">552.5</span>
              </p>
              <p>
                shipping : <span className="float-right">552.5</span>
              </p>

              <p>
                cash on delivery fees :
                <span className="float-right">552.5</span>
              </p>
              <hr />
              <h4>
                cash on :<span className="float-right">552.5</span>
              </h4>
              <hr />
              <p>this is a test example just for you and you can</p>
              <Button secondary fluid>
                Confirm Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
