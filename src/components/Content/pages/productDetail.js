import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "reactstrap";
import { Dropdown } from "semantic-ui-react";

export default class productDetail extends Component {
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
  render() {
    return (
      <Row className="pt-5 productDetail">
        <Col className="col-md-8 col-12 col-sm-12 mt-5">
          <div>
            <Carousel className="" axis="horizontal">
              <div>
                <img src="https://picsum.photos/700/400?img=1" />
                <p className="legend">My Classic Still 1</p>
              </div>
              <div>
                <img src="https://picsum.photos/700/400?img=2" />
                <p className="legend">My Classic Still 2</p>
              </div>
              <div>
                <img src="https://picsum.photos/700/400?img=3" />
                <p className="legend">My Classic Still 3</p>
              </div>
            </Carousel>
          </div>
        </Col>
        <Col className="col-md-4 col-sm-12 col-12 mt-5">
          <div></div>
          <div className="wight pb-0 mt-2 border-0 product-title">
            <h3 className="title">now Sweet Almond Oil</h3>
            <div className="data-rating mt-4 d-flex align-items-center">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="d-block" style={{ width: "100%", height: "80px" }}>
              <div className="mt-3">
                <h4 className="mt-2" style={{ display: "inline-block" }}>
                  color
                </h4>
                <Dropdown
                  style={{ float: "right", width: "auto" }}
                  placeholder="Sort by hhjhgkh"
                  fluid
                  onChange={this.handleClick}
                  selection
                  options={this.state.categories}
                />
              </div>
            </div>
            <div className="d-block" style={{ width: "100%", height: "80px" }}>
              <div className="mt-3">
                <h4 className="mt-2" style={{ display: "inline-block" }}>
                  color
                </h4>
                <Dropdown
                  style={{ float: "right", width: "auto" }}
                  placeholder="Sort by hhjhgkh"
                  fluid
                  onChange={this.handleClick}
                  selection
                  options={this.state.categories}
                />
              </div>
            </div>
            <div className="productPrice pt-md-0 h-auto">
              <h3 className="d-md-block">
                AED20.56
                <span className="tax-text">VAT excluded.</span>
              </h3>
            </div>
            <div className="m-3">
              <button disabled="disabled" className="add-cart-btn w-100">
                Select an option
                <span className="promise-btn__spinner-wrapper hidden">
                  <span className="spinner"></span>
                </span>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}
