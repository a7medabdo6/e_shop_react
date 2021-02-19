import React from "react";
import axios from "axios";

export default class Ploicy extends React.Component {
  state = {
    text: " ",
  };
  componentDidMount() {
    axios
      .get(`https://niceone.alameeremlak.com/api/privacy-policy`, {
        headers: {
          "Accept-Language": "ar",
          "Content-Type": "application/html",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const text = res.data;
        this.setState({ text });
        console.log(text);
      });
  }
  render() {
    return (
      <div className="container mt-5 pt-5" style={{ width: "80%" }}>
        <div className="mt-5 p-5 text-center">
          <h3>Exchange and Returns</h3>
          <p className="updateDate">
            <span>Last Update</span> :<span>25/2/2019</span>
          </p>
          <div dangerouslySetInnerHTML={{ __html: this.state.text }} />
        </div>
      </div>
    );
  }
}
