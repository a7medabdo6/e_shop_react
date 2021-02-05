import React from "react";
import { Image } from "semantic-ui-react";
import { Row, Col } from "reactstrap";

import LazyLoad from "react-lazyload";
import ProductsSlider from "./ProductsSlider";

function MainContent() {
  return (
    <div className="mt-3 mb-5 ">
      <LazyLoad height={100}>
        <Image
          className=" w-100"
          src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F20502116_2021eng-1242x810.gif"
          fluid
        />
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F81528946_banner_topface_junuary_eng_copy-1242x810.jpg"
            fluid
          />
        </div>
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F17476769_ezgif.com-video-to-gif-2-1242x810.gif"
            fluid
          />
        </div>
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="  https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F53614474_banner_thebalm_junaury_eng-1242x810.jpg"
            fluid
          />
        </div>
      </LazyLoad>
      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F45517384_mbakher-en-1242x810.jpg"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F9503776_oud-en-1242x810.jpg"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider
          title={"main title"}
          body={"this is a fake body"}
          price="10.99"
        />
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src=" https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F26460627_en_-1242x810.png"
            fluid
          />
        </div>
      </LazyLoad>
      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F18786950_banner_comodynes_eng-1242x810.jpg"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F11730241_banner_ordinary_eng-1242x810.jpg"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="  https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F9706847_benefit-en-1242x810.jpg"
            fluid
          />
        </div>
      </LazyLoad>

      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F90627539_mac_en-1242x810.png"
            fluid
          />
        </div>
      </LazyLoad>
      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F80792273_banner_section-04-1242x810.jpg"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F7299975_banner_section-05-1242x810.jpg"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F18729357_banner_section-06-1242x810.jpg"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F33613774_Ecerin-2-1242x810.png"
            fluid
          />
        </div>
      </LazyLoad>

      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F19115399_Agadir-Argan-Oil-EN--1242x810.png"
            fluid
          />
        </div>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>
      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F35998333_Women-perfumes-en1-1242x810.png"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F94631002_Men-Perfumes-en1-1242x810.png"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F15961279_musk-1242x810.png"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F98108843_hair-1242x810.png"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src=" https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F55891285_oud-en1-1242x810.png"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>
      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F84303680_Me-en-1242x810.png"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F60327787_Beaut-en-1242x810.png"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>

      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F51759689__eng_copy-1242x810.jpg"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F6708404__eng_copy-1242x810.jpg"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>

      <LazyLoad height={100}>
        <Row>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F25180266_b2-en-1242x810.png"
              fluid
            />
          </Col>
          <Col>
            <Image
              className=" w-100"
              src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F31767742_b1-en-1242x810.png"
              fluid
            />
          </Col>
        </Row>
      </LazyLoad>
      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>
      <LazyLoad height={100}>
        <div className="mt-3 mb-3 ">
          <Image
            className=" w-100"
            src="https://d3e7ardzpaj3y4.cloudfront.net/image/catalog%2Fapp_component%2F42986766_topface_en-1242x810.png"
            fluid
          />
        </div>
      </LazyLoad>

      <LazyLoad height={100}>
        <ProductsSlider />
      </LazyLoad>
    </div>
  );
}

export default MainContent;
