import React, { Component } from "react";
import {
  Tab,
  Icon,
  Table,
  Progress,
  Segment,
  Dropdown,
  Button,
  Card,
} from "semantic-ui-react";
import { Row } from "reactstrap";

export default class reviewsProduct extends Component {
  state = {
    reviews: [
      {
        key: "Most Popular",
        text: "Most Popular",
        value: "Most Popular",
      },
      {
        key: "news",
        text: "news",
        value: "news",
      },
      {
        key: "Offers",
        text: "Offers",
        value: "Offers",
      },
      {
        key: "Price high to low",
        text: "Price high to low",
        value: "Price high to low",
      },
      {
        key: "Price low to high",
        text: "Price low to high",
        value: "Price low to high",
      },
    ],
  };
  rateProductHandle = () => {};
  componentDidMount() {}
  render() {
    const panes = [
      {
        menuItem: "Description",
        render: () => (
          <Tab.Pane attached={false}>
            <h3>Yves Saint Laurent Y For Men:</h3>
            <p>
              Aromatic Fougere fragrance for men that was launched in 2018. With
              notes of Apple, Ginger, Bergamot, Sage, Juniper Berries, Geranium,
              Amberwood, Tonka Bean, Cedar, Vetiver, and Olibanum. A refreshing
              scent that is perfect for every occasion.
            </p>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "specifications",
        render: () => (
          <Tab.Pane attached={false}>
            <Table celled striped>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="file outline" /> package.json
                  </Table.Cell>
                  <Table.Cell>Initial commit</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="file outline" /> Gruntfile.js
                  </Table.Cell>
                  <Table.Cell>Initial commit</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Review",
        render: () => (
          <Tab.Pane attached={false}>
            <Row>
              <div className="col-md-4">
                <Row>
                  <div className="col-md-5">
                    <h2>5.00 / 5</h2>
                    <i className="fa fa-star " aria-hidden="true"></i>
                    <i className="fa fa-star " aria-hidden="true"></i>
                    <i className="fa fa-star " aria-hidden="true"></i>
                    <i className="fa fa-star " aria-hidden="true"></i>
                    <i className="fa fa-star " aria-hidden="true"></i>
                  </div>
                  <div className="col-md-7">
                    <Progress
                      percent={47}
                      success
                      style={{ backgroundColor: "#e9ecef", margin: "4px" }}
                    />
                    <Progress
                      percent={29}
                      color="pink"
                      style={{ backgroundColor: "#e9ecef", margin: "4px" }}
                    />
                    <Progress
                      percent={68}
                      color="brown"
                      style={{ backgroundColor: "#e9ecef", margin: "4px" }}
                    />
                  </div>
                </Row>
              </div>
              <div className="col-md-8">
                <div className=" ">
                  <h3 style={{ display: "inline-block", float: "right" }}>
                    <Button primary>rate product</Button>
                  </h3>
                  <Dropdown
                    style={{ width: "auto", float: "left" }}
                    placeholder="Sort by"
                    fluid
                    selection
                    options={this.state.reviews}
                  />
                </div>
                <div className=" d-block" style={{ marginTop: "100px" }}>
                  <div className="w-100">
                    <Card style={{ width: "100%" }} className="mt-5">
                      <Card.Content style={{ textAlign: "left" }}>
                        <div className="">
                          <i className="fa fa-star " aria-hidden="true"></i>
                          <i className="fa fa-star " aria-hidden="true"></i>
                          <i className="fa fa-star " aria-hidden="true"></i>
                          <i className="fa fa-star " aria-hidden="true"></i>
                          <i className="fa fa-star " aria-hidden="true"></i>
                        </div>
                      </Card.Content>
                      <Card.Content className="p-5">
                        Amy is a violinist with 2 years experience in the
                        wedding industry.
                      </Card.Content>
                    </Card>
                  </div>
                </div>
              </div>
            </Row>
          </Tab.Pane>
        ),
      },
    ];
    return (
      <div
        style={{
          width: "100%",
          marginTop: "50px",
          backgroundColor: "white",
          marginBottom: "50px",
        }}
      >
        <Tab
          menu={{ secondary: true, pointing: true }}
          style={{ padding: "20px" }}
          panes={panes}
        />
      </div>
    );
  }
}
