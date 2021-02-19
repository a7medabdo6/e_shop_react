import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dropdown, Input, Checkbox } from "semantic-ui-react";

import CardProduct from "../cardproduct";

export default class shop extends Component {
  state = {
    products: [],
    categories: [
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

  componentDidMount() {
    console.log(this.props);
    const { handle } = this.props.match.params;

    axios
      .post(`https://niceone.alameeremlak.com/api/products-by-category`, {
        headers: {
          "Accept-Language": "ar",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        id: handle,
      })
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        console.log(this.state.products);
      });
  }
  handleClick = (e) => {
    // console.log(e.target.innerText);
  };
  render() {
    return (
      <>
        <Row className="mt-5 mb-5">
          <Col
            className="col-md-3 mt-5 mb-5"
            style={{ backgroundColor: "white" }}
          >
            <div className="mt-2">
              <h3>Filter by</h3>
              <hr />
              <div className="mt-2">
                <h4>Brands</h4>
                <Input icon="search" className="mb-5" placeholder="Search..." />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
              </div>
            </div>

            <div>
              <hr />
              <div className="mt-2">
                <h4>Care</h4>
                <Input icon="search" className="mb-5" placeholder="Search..." />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
              </div>
            </div>
            <div>
              <hr />
              <div className="mt-2">
                <h4>Care</h4>
                <Input icon="search" className="mb-5" placeholder="Search..." />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
                <Checkbox
                  className="m-1"
                  label={<label>Make my profile visible</label>}
                />
              </div>
            </div>
          </Col>
          <Col className="col-md-9 mt-5">
            <div className="m-5 ">
              <h3 style={{ display: "inline-block" }}>Care - 195 products</h3>

              <Dropdown
                className="right-float"
                style={{ width: "auto" }}
                placeholder="Sort by"
                fluid
                onChange={this.handleClick}
                selection
                options={this.state.categories}
              />
            </div>
            <Row>
              {this.state.products.map((product) => {
                return (
                  <Col key={product.id} className="col-md-3">
                    <Link to={"/shop/products/" + product.id}>
                      <CardProduct
                        image={product.main_image}
                        title={product.title}
                        des={product.description}
                        price={product.packaging_price}
                      />
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
