import React, { Component } from "react";
import { Image, Button, Card } from "semantic-ui-react";
import config from "../../config.json";

export default class cardproduct extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            <Image src={config.SERVER_URL + this.props.image} />
            <Card.Header className="productTit">{this.props.title}</Card.Header>
            <Card.Description className="productDes">
              {this.props.des} <strong>musicians</strong>
            </Card.Description>
            <Card.Description className="pt-4">
              <del
                style={{
                  float: "left",
                  display: "block",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {this.props.price}
              </del>
              <p>
                <strong style={{ float: "left", color: "#d0021b" }}>
                  5.99$
                </strong>
                <span className="discount">-5%</span>
              </p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="red">
                Approve
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
