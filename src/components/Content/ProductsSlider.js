import React from "react";

import axios from "axios";
//import { Image, Button, Card } from "semantic-ui-react";

import { Swiper, SwiperSlide } from "swiper/react";
import CardProduct from "./cardproduct";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

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

    return (
      <div>
        <Swiper
          className="mt-5 mb-5"
          spaceBetween={10}
          slidesPerView={4}
          navigation
          // onSlideChange={/*() => console.log("slide change")*/}
          // onSwiper={(swiper) => /*console.log(swiper)*/}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              width: 400,
              slidesPerView: 1,
            },
            500: {
              width: 500,
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            850: {
              width: 850,
              slidesPerView: 4,
            },
            1100: {
              width: 1100,
              slidesPerView: 5,
            },
            1100: {
              width: 1200,
              slidesPerView: 5,
            },
          }}
        >
          {this.state.products.map((product) => {
            return (
              <SwiperSlide
                key={product.id}
                style={{ width: "232px", margin: "10px" }}
              >
                <CardProduct
                  title={product.title}
                  des={product.description}
                  price={product.price}
                />
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    );
  }
}
export default ProductsSlider;
