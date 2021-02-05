import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";

import CardProduct from "../cardproduct";

export default class shop extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const { handle } = this.props.match.params;

    axios
      .get(`https://fakestoreapi.com/products/category/${handle}`)
      .then((res) => {
        const products = res.data;
        this.setState({ products });
      });
  }
  render() {
    return (
      <>
        <Row>
          {this.state.products.map((product) => {
            return (
              <Col>
                <CardProduct
                  title={product.title}
                  des={product.description}
                  price={product.price}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
