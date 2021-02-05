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
import Terms from "./components/Content/pages/Terms";
import Policy from "./components/Content/pages/Policy";
import Privacy from "./components/Content/pages/Privacy";

import { lazyload } from "react-lazyload";

lazyload({
  height: 200,
  once: true,
  offset: 100,
});
class App extends React.Component {
  componentDidMount() {
    console.log(document.documentElement.dir);
  }
  state = {
    data: [],
    token: "",
    email: "",
    pass: "",
  };
  componentWillMount = function () {
    //  document.documentElement.dir = "rtl";
  };
  // <MainContent />   <Contact />
  render() {
    return (
      <div className="App ">
        <BrowserRouter>
          <div style={{ boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)" }}>
            <Nav />
          </div>
          <div className="container2">
            <Route path="/" exact component={MainContent} />
            <Route path="/terms" exact component={Terms} />
            <Route path="/policy" exact component={Policy} />
            <Route path="/privacy" exact component={Privacy} />
            <Route path="/shop/:handle" exact component={Shop} />
          </div>
          <div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
