import React from "react";
import {
  Button,
  Header,
  Icon,
  Progress,
  Modal,
  Dropdown,
} from "semantic-ui-react";

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
            <a className="loginlink">Login</a>
          </div>
          <div>
            <a className="registerlink">Don't Have Account ? Register</a>
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
            <h6>
              <a href="#" className="d-flex align-items-center text-dark">
                <i className="fa mx-3 fa-user"></i> <span>Register</span>
              </a>
            </h6>
            <h6 className="my-3">
              <a href="#" className="d-flex align-items-center text-dark">
                <i className="fa mx-3 fa-mobile"></i>
                <span>Login With Email</span>
              </a>
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
