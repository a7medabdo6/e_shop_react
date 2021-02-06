import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "reactstrap";

export default class productDetail extends Component {
  render() {
    return (
      <Row className="pt-5">
        <Col className="col-md-8 col-12 col-sm-12 mt-5">
          <div>
            <h2>My Image Gallery</h2>
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
          <div className="wight pb-0 border-0 product-title">
            <h3 className="title">now Sweet Almond Oil</h3>
            <div className="data-rating d-flex align-items-center">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="productPrice pt-md-0 h-auto">
              <h3 className="d-md-block">
                AED20.56
                <span className="tax-text">VAT excluded.</span>
              </h3>
            </div>
            <div className="">
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
