import React from "react";

import { Tab, Input, Icon, Button, Step } from "semantic-ui-react";
import Account from "./partials/account";

const panes = [
  {
    menuItem: "My Account",
    render: () => (
      <Tab.Pane>
        <h3>my Account</h3>
        <hr />
        <div className="m-3">
          <label className="m-2 d-block">your first and last name : </label>
          <Input placeholder="your name..." />
        </div>
        <div className="m-3">
          <label className="m-2 d-block">your email :</label>
          <Input placeholder="your email..." />
        </div>
        <div>
          <label className="m-2 d-block">mobile number :</label>
          <Account />
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Change password",
    render: () => (
      <Tab.Pane>
        <h3>Change password</h3>
        <hr />
        <div className="m-3">
          <label className="m-2 d-block">new password :</label>
          <Input type="password" placeholder="" />
        </div>
        <div className="m-3">
          <label className="m-2 d-block">confirm new password :</label>
          <Input type="password" placeholder="" />
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "my Orders",
    render: () => (
      <Tab.Pane>
        <div className="text-center orders">
          <Step.Group ordered>
            <Step completed>
              <Step.Content>
                <Step.Title>Shipping</Step.Title>
              </Step.Content>
            </Step>

            <Step completed>
              <Step.Content>
                <Step.Title>Billing</Step.Title>
              </Step.Content>
            </Step>

            <Step active>
              <Step.Content>
                <Step.Title>
                  Confirm <br /> Order
                </Step.Title>
              </Step.Content>
            </Step>
            <Step active>
              <Step.Content>
                <Step.Title>
                  Confirm <br /> Order
                </Step.Title>
              </Step.Content>
            </Step>

            <Step>
              <Step.Content>
                <Step.Title>
                  Confirm <br /> Order
                </Step.Title>
              </Step.Content>
            </Step>
          </Step.Group>
          <hr />
          <div className="mt-2 row">
            <div className="col-md-12 m-3">Num of Items</div>
            <div className="col-md-3 mt-2">gfgfgf</div>
            <div className="col-md-3 mt-2">gfgfgf</div>
            <div className="col-md-3 mt-2">gfgfgf</div>
            <div className="col-md-3 mt-2">gfgfgf</div>
            <div className="col-md-3 mt-2">gfgfgf</div>
            <div className="col-md-3 mt-2">gfgfgf</div>

            <div className="col-md-3 mt-2">gfgfgf</div>
            <div className="col-md-3 mt-2">gfgfgf</div>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
  {
    menuItem: "my Tickets",
    render: () => (
      <Tab.Pane>
        <div className="text-center">
          <div className="mt-5">
            <Icon className="mt-2" name="ticket" style={{ fontSize: "25px" }} />
            <h3 className="mt-2">yuo have no tickets</h3>
            <p className="mt-2">
              lorem21 fdgdgdrt trytr jkhjk hggf gfgrter dffer
            </p>
            <Button className="mt-2">My Orders</Button>
          </div>
        </div>
      </Tab.Pane>
    ),
  },
];
export default function Profile() {
  return (
    <div className="m-5 p-5">
      <Tab
        menu={{ fluid: true, vertical: true }}
        menuPosition="left"
        panes={panes}
      />
    </div>
  );
}
