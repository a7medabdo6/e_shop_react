import React from "react";
//import axios from 'axios';
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "./components/navbar/nav";

import Footer from "./components/Footer/Footer";
//import "./assets/vendor/nucleo/css/nucleo.css";
//import "./assets/vendor/font-awesome/css/font-awesome.min.css";
//import "./assets/css/argon-design-system-react.css";
import "semantic-ui-css/semantic.min.css";

import MainContent from "./components/Content/MainContent";
import Shop from "./components/Content/pages/shop";
import ProductDetail from "./components/Content/pages/productDetail";
import Terms from "./components/Content/pages/Terms";
import Policy from "./components/Content/pages/Policy";
import Privacy from "./components/Content/pages/Privacy";
import Address from "./components/Content/pages/checkout/address";

import { lazyload } from "react-lazyload";

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationEN";
import Profile from "./components/Content/pages/Profile";
import payment from "./components/Content/pages/checkout/payment";
lazyload({
  height: 200,
  once: true,
  offset: 100,
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

const App = () => {
  const { t } = useTranslation();

  // <MainContent />   <Contact />

  return (
    <div className="App  ">
      <BrowserRouter>
        <div style={{ boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)" }}>
          <Nav />
        </div>
        <div>{t("email")}</div>
        <div style={{ backgroundColor: "#f8f8f8" }}>
          <div className="container2">
            <Route path="/" exact component={MainContent} />
            <Route path="/terms" exact component={Terms} />
            <Route path="/policy" exact component={Policy} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="/shop/:handle" exact component={Shop} />
            <Route path="/shop/products/:id" exact component={ProductDetail} />
            <Route path="/checkout/address" exact component={Address} />

            <Route path="/profile" exact component={Profile} />
            <Route path="/checkout/payment" exact component={payment} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
