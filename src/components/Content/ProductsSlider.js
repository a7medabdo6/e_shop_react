import React from "react";

import axios from "axios";
//import { Image, Button, Card } from "semantic-ui-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CardProduct from "./cardproduct";

class ProductsSlider extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    //console.log(this.state.products);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {this.state.products.map((product) => {
            return (
              <div key={product.id} style={{ width: "232px", margin: "10px" }}>
                <CardProduct
                  title={product.title}
                  des={product.description}
                  price={product.price}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
export default ProductsSlider;
