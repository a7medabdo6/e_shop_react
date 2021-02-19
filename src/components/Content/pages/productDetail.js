import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Row, Col } from "reactstrap";
import axios from "axios";
import { Dropdown } from "semantic-ui-react";
import config from "../../../config.json";
import { image } from "faker";
import ReviewsProduct from "./partials/reviewsProduct";

export default class productDetail extends Component {
  state = {
    arrayofstars: ["a"],
    rate: null,
    productDetails: [],
    productDetailsImages: [],
  };
  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .post(`https://niceone.alameeremlak.com/api/product`, {
        id: id,
      })
      .then((res) => {
        const productDetails = res.data;
        this.setState({ productDetails });
        this.setState({ productDetailsImages: productDetails.images });
        this.setState({ rate: productDetails.rate });

        console.log(this.state.rate);
      });
  }
  handleRate = () => {
    this.state.arrayofstars.length = 0;
    for (var i = 0; i < this.state.rate; i++) {
      this.state.arrayofstars.push(<i className="fa fa-star"></i>);
    }
    console.log(this.state.arrayofstars[0] + "arrayy");
  };
  setonclick = (index) => {
    var stars = document.querySelectorAll("#star");
    for (var num = 0; num < stars.length; num++) {
      stars[num].classList.add("fa-star-o");
      stars[num].classList.remove("fa-star");
    }

    for (var i = 0; i <= index; i++) {
      stars[i].classList.add("fa-star");
      stars[i].classList.remove("fa-star-o");
    }
  };
  render() {
    return (
      <div>
        <Row className="pt-5 productDetail">
          <Col className="col-md-8 col-12 col-sm-12 mt-5">
            <div>
              <Carousel className="" axis="vertical">
                {this.state.productDetailsImages.map((img) => {
                  return (
                    <div key={image.id}>
                      <img src={config.SERVER_URL + img.image} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
          <Col className="col-md-4 right-rtl text-right-custom col-sm-12 col-12 mt-5">
            <div className="main manufacturer">
              <div className="d-flex align-items-center d-grid">
                <div className="brand">
                  <a href="/en/thebalm-cosmetics/" className="">
                    <img
                      src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/manufacturer/38456132_theBalm Cosmetics-500x500.png"
                      width="100px"
                      height="100px"
                      alt="thebalm-cosmetics"
                      className="img-left"
                    />
                  </a>
                </div>
                <div className="notice">
                  <p className="quality-product">Original 100%</p>

                  <div className="text-notice pl-1 pr-1 mobile-hide-text">
                    Click here for more of
                    <h2>
                      <a href="/en/thebalm-cosmetics/" className="">
                        theBalm Cosmetics
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="wight pb-0 mt-2 border-0 product-title">
              <h3 className="title">{this.state.productDetails.title}</h3>
              <div className="data-rating mt-3 d-inline-block  align-items-center">
                {this.handleRate()}
                {this.state.arrayofstars.map((star) => {
                  return star;
                })}
              </div>
              <div className="review">
                <a href="#">Write A Review</a>
                <div className="ratings">
                  <i
                    className="fa fa-star-o "
                    id="star"
                    onClick={() => this.setonclick(0)}
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-star-o "
                    id="star"
                    onClick={() => this.setonclick(1)}
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-star-o "
                    id="star"
                    onClick={() => this.setonclick(2)}
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-star-o "
                    id="star"
                    onClick={() => this.setonclick(3)}
                    aria-hidden="true"
                  ></i>
                  <i
                    className="fa fa-star-o "
                    id="star"
                    onClick={() => this.setonclick(4)}
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div
                className="d-block"
                style={{ width: "100%", height: "80px" }}
              >
                <div className="mt-3">
                  <h4
                    className="mt-2 float-left-custom right-rtl"
                    style={{ display: "inline-block" }}
                  >
                    color
                  </h4>
                  <Dropdown
                    style={{ width: "auto" }}
                    placeholder="Sort by hhjhgkh"
                    fluid
                    className="left-ltr"
                    onChange={this.handleClick}
                    selection
                    options={this.state.categories}
                  />
                </div>
              </div>
              <div
                className="d-block"
                style={{ width: "100%", height: "80px" }}
              >
                <div className="mt-3">
                  <h4
                    className="mt-2 float-left-custom right-rtl"
                    style={{ display: "inline-block" }}
                  >
                    color
                  </h4>
                  <Dropdown
                    style={{ width: "auto" }}
                    placeholder="Sort by hhjhgkh"
                    fluid
                    className="left-ltr"
                    onChange={this.handleClick}
                    selection
                    options={this.state.categories}
                  />
                </div>
              </div>
              <div className="productPrice pt-md-0 h-auto">
                <del>
                  <h4 className="preReductionPrice mb-2">AED166.43</h4>
                </del>
                <h3 className="d-md-block">
                  AED20.56
                  <span className="discountBadge bage-radius rounded-pill px-2 py-1">
                    <h5 className="bg">-79%</h5>
                  </span>
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
        <Row>
          <ReviewsProduct />
        </Row>
      </div>
    );
  }
}
