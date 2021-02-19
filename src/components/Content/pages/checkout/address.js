import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Step, Button, Image, Icon } from "semantic-ui-react";

export default class address extends Component {
  render() {
    const steps = [
      {
        key: "Address",
        icon: "truck",
        active: true,
        completed: true,
        title: "Address",
        description: "egypt ,assuit,123 street",
      },
      {
        key: "billing",

        icon: "payment",
        title: "Billing",
        description: "Enter billing information",
      },
      { key: "confirm", icon: "info", title: "Confirm Order" },
    ];
    return (
      <div className="mt-5 pt-5 pb-5 row">
        <div className="w-100 text-center">
          <Step.Group items={steps} />
        </div>
        <Card.Group className="col-md-8 col-12 mt-5">
          <Card
            className="margin-auto"
            style={{
              textAlign: "center",
              width: "60%",
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
              <div className="ui two buttons">
                <Button basic color="green" className="m-1">
                  Edit
                </Button>
                <Button basic color="red" className="m-1">
                  Delete
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        <div className="col-md-4 col-12 mt-5 text-center">
          <Button color="white" className="padding-custom">
            <Button.Content visible>
              <Icon name="plus" />
              Add delivery Address
            </Button.Content>
          </Button>
        </div>
        <div style={{ marginLeft: "90%", marginTop: "40px" }}>
          <Link className="p-3 btn btn-primary" to="/checkout/payment">
            continue
          </Link>
        </div>
      </div>
    );
  }
}
