import React, { useState, useEffect } from "react";
import { Button, Header, Icon, Progress, Modal } from "semantic-ui-react";
import axios from "axios";

class CartList extends React.Component {
  state = {
    open: false,
    products: [],
  };
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <Modal
        className="modalCart"
        closeIcon
        open={this.state.open}
        trigger={
          <div
            className="d-in-block pr-2 pl-2 "
            style={{ position: "relative" }}
          >
            <a>
              <i className="fa fa-2x fa-shopping-basket" aria-hidden="true"></i>
            </a>
            <span
              className="d-flex justify-content-center align-items-center count-cart"
              data-v-5cb420cf=""
            >
              5
            </span>
          </div>
        }
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
      >
        <Header icon="archive" content="Shopping bag" />
        <Modal.Content>
          <div>
            <h6 className="title-progress-cart">
              <b>Want Free Shipping?</b> Add <span>AED136.44</span> more
            </h6>
            <Progress percent={80} success></Progress>
          </div>

          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
          <div className="cartListProducts">
            {this.state.products.map((product) => {
              return (
                <article
                  key={product.id}
                  className="d-flex wight-cart align-items-center no-gutters"
                >
                  <div className="details no-gutters w-100">
                    <div className="row">
                      <div className="col-10">
                        <h3 className="title">
                          Nature Republic Aloe Vera Soothing Gel - 300ml
                        </h3>
                      </div>
                      <div className="col-2 text-center position">
                        <div className="btn-delete-cart ">
                          <span width="16px" alt="">
                            <i
                              class="fa fa-2x fa-trash-o"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </div>
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
                  <div className="thumb col-auto px-1">
                    <img
                      src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog/49201240_epublic Aloe-500x500.png"
                      alt="Nature Republic Aloe Vera Soothing Gel - 300ml"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </Modal.Content>
        <Modal.Actions>
          <i
            className="fa fa-2x fa-times"
            color="red"
            onClick={() => this.setState({ open: false })}
            aria-hidden="true"
          ></i>
          <div className="footer-cart">
            <p className="total">Total : 6 item(s) - AED193.48</p>
            <button className="action_button_lg">
              <span>Confirm Order</span>
              <span className="promise-btn__spinner-wrapper hidden">
                <span className="spinner"></span>
              </span>
            </button>
          </div>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default CartList;
