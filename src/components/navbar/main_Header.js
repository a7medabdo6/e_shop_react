import React from "react";
import { Dropdown, Menu, Form, Checkbox } from "semantic-ui-react";
import CartList from "../Modals/CartList";
import UserLogin from "../Modals/userLogin";

class mainHeader extends React.Component {
  state = {
    value: "en",
  };
  handleChange = (e, { value }) => {
    this.setState({ value });
    if (this.state.value == "en") {
      document.documentElement.dir = "rtl";
      document.getElementById("root").classList.add("rtl");
      import("../../Lang/rtl.css");
    } else if (this.state.value == "ar") {
      document.documentElement.dir = "ltr";
      document.getElementById("root").classList.remove("rtl");

      // document.body.classList.add("modal-open");
      import("../../Lang/ltr.css");
    }
  };

  render() {
    return (
      <>
        <Menu className="row">
          <div className="col-xl-7 right col-10 col-lg-7 col-md-6">
            <div className="d-in-block pr-2 pl-2">
              <i class="fa fa-bars" aria-hidden="true"></i>
              <Dropdown text="categories" className="link item d-in-block">
                <Dropdown.Menu>
                  <Dropdown.Item>Inbox</Dropdown.Item>
                  <Dropdown.Item>Starred</Dropdown.Item>
                  <Dropdown.Item>Sent Mail</Dropdown.Item>
                  <Dropdown.Item>Drafts (143)</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Spam (1009)</Dropdown.Item>
                  <Dropdown.Item>Trash</Dropdown.Item>
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
                      <Form.Field>
                        <Checkbox
                          radio
                          label="English"
                          name="checkboxRadioGroup"
                          value="en"
                          checked={this.state.value === "en"}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
                      <Form.Field>
                        <Checkbox
                          radio
                          label="Arabic"
                          name="checkboxRadioGroup"
                          value="ar"
                          checked={this.state.value === "ar"}
                          onChange={this.handleChange}
                        />
                      </Form.Field>
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

export default mainHeader;
