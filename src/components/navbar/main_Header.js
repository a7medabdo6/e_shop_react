import React from "react";
import { Dropdown, Menu, Form, Checkbox } from "semantic-ui-react";
import CartList from "../Modals/CartList";
import UserLogin from "../Modals/userLogin";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { selectLang } from "../../actions";

class mainHeader extends React.Component {
  state = {
    value: "en",
    categories: [],
    lang: "ar",
  };
  handleChange = (e, { value }) => {
    this.props.selectLang(value);
    //this.setState({ value });
    if (this.props.selectedLang == "en") {
      document.documentElement.dir = "rtl";
      document.getElementById("root").classList.add("rtl");
      import("../../Lang/rtl.css");
    } else if (this.props.selectedLang == "ar") {
      document.documentElement.dir = "ltr";
      document.getElementById("root").classList.remove("rtl");

      // document.body.classList.add("modal-open");
      import("../../Lang/ltr.css");
    }
  };
  componentDidMount() {
    axios
      .get(`https://niceone.alameeremlak.com/api/categories-all`, {
        headers: {
          "Accept-Language": this.props.selectedLang,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        const categories = res.data;
        // const CAT = CATObject["All Categories"];
        this.setState({ categories });
        console.log(categories);
      });
  }

  render() {
    // console.log(this.state.categories);
    console.log(this.props.langs);
    return (
      <>
        <Menu className="row">
          <div className="col-xl-7 right col-10 col-lg-7 col-md-6">
            <div className="d-in-block pr-2 pl-2">
              <i class="fa fa-bars" aria-hidden="true"></i>
              <Dropdown
                text="categories"
                pointing
                className="link item d-in-block"
              >
                <Dropdown.Menu>
                  {this.state.categories.map((cat) => {
                    // console.log(typeof cat.sub_categories);
                    return (
                      <Dropdown.Item key={cat.id} style={{ width: "200px" }}>
                        <Dropdown className="w-100" text={cat.name}>
                          <Dropdown.Menu>
                            {cat.sub_categories.map((sub) => {
                              console.log(sub.name);
                              /* var name = sub.map((item) => {
                                return item.locale === this.state.lang
                                  ? item.name
                                  : null;
                              });
                              var filtered = name.filter(function (el) {
                                return el != null;
                              });
                              var filteredToString = filtered.toString();
                              */
                              /* var name =
                                sub.translations[0].local === "ar"  //  
                                  ? sub.translations[0].name
                                  : sub.translations[1].name;
                            */
                              // console.log(filteredToString, " this i a name");
                              return (
                                <Dropdown.Item key={sub.id}>
                                  <Link to={`/shop/${sub.id}`}>{sub.name}</Link>
                                </Dropdown.Item>
                              );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="right col-xl-5 col-2 col-lg-5 col-md-6">
            <div className="d-in-block d-none-custom  d-sm-block_force pr-2 pl-2">
              <i class="fa fa-globe" aria-hidden="true"></i>

              <Dropdown
                text="languages"
                simple
                className="link item d-in-block"
              >
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Form>
                      {this.props.langs.map((lang) => {
                        return (
                          <Form.Field>
                            <Checkbox
                              radio
                              label={lang.name}
                              name="checkboxRadioGroup"
                              value={lang.value}
                              checked={this.props.selectedLang === lang.value}
                              onChange={this.handleChange}
                            />
                          </Form.Field>
                        );
                      })}
                    </Form>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-in-block d-none-custom  d-sm-block_force pr-2 pl-2 ">
              <i class="fa fa-flag" aria-hidden="true"></i>

              <Dropdown
                simple
                text="flags"
                className="link item d-in-block pr-2 pl-2"
              >
                <Dropdown.Menu compact>
                  <Dropdown.Item>
                    <Form>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="English"
                          name="checkboxRadioGroup"
                          value="this"
                          checked={this.state.value === "this"}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="Arabic"
                          name="checkboxRadioGroup"
                          value="that"
                          checked={this.state.value === "that"}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="emarates"
                          name="checkboxRadioGroup"
                          value="emarate"
                          checked={this.state.value === "emarate"}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="USA"
                          name="checkboxRadioGroup"
                          value="USA"
                          checked={this.state.value === "USA"}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                    </Form>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className="d-in-block d-none-custom  d-sm-block_force pr-2 pl-2 ">
              <i class="fa fa-user" aria-hidden="true"></i>

              <Dropdown
                text="my account"
                pointing="top"
                className="link item d-in-block"
              >
                <Dropdown.Menu style={{ left: "-69%", width: "250px" }}>
                  <UserLogin />
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <CartList />
          </div>
        </Menu>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    langs: state.Langs,
    selectedLang: state.selectedLang,
  };
};

export default connect(mapStateToProps, { selectLang })(mainHeader);
