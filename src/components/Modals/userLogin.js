import React from "react";
import {
  Button,
  Header,
  Icon,
  Progress,
  Modal,
  Dropdown,
} from "semantic-ui-react";
import RigestirUser from "./rigesterUser";
import { Link } from "react-router-dom";

function UserLogin() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      className="modalCart"
      closeIcon
      open={open}
      trigger={
        <Dropdown.Item>
          <div>
            <Link className="loginlink">Login</Link>
          </div>
          <div>
            <Link className="registerlink">Don't Have Account ? Register</Link>
          </div>
        </Dropdown.Item>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content="Login" />
      <Modal.Content>
        <div className="mt-4">
          <h4>Welcome back again</h4> <h6 className="mt-3">Login With Email</h6>
        </div>
        <div className="mt-5">
          <form dir="ltr" autocomplete="off" className="box-form">
            <div>
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" />
            </div>
          </form>
        </div>
        <div className="mt-5 posAb">
          <div className="my-3">
            <RigestirUser onClick={() => setOpen(false)} />
            <h6 className="my-3">
              <Link href="#" className="d-flex align-items-center text-dark">
                <i className="fa mx-3 fa-mobile"></i>
                <span>Login With Email</span>
              </Link>
            </h6>
          </div>
          <div className="mt-5">
            <button className="action_button_lg text-center">
              Login
              <span className="promise-btn__spinner-wrapper hidden">
                <span className="spinner"></span>
              </span>
            </button>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <i
          className="fa fa-2x fa-times"
          color="red"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        ></i>
      </Modal.Actions>
    </Modal>
  );
}

export default UserLogin;
