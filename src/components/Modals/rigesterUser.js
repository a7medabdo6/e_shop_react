import React, { Component } from "react";
import {
  Button,
  Header,
  Icon,
  Progress,
  Modal,
  Form,
  Dropdown,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

function renderInput({ input, index }) {
  return <input {...input} type={index} />;
}
function RigesterUser(props) {
  const [open, setOpen] = React.useState(false);
  console.log(props);

  const onSubmit = (formValues) => {
    console.log(formValues, "this are forms values");
  };
  return (
    <div>
      <Modal
        className="modalCart"
        closeIcon
        open={open}
        trigger={
          <Dropdown.Item>
            <h6>
              <Link className="d-flex align-items-center text-dark">
                <i className="fa mx-3 fa-user"></i> <span>Register</span>
              </Link>
            </h6>
          </Dropdown.Item>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header content="register" />
        <Modal.Content>
          <div className="mt-4">
            <h4></h4>
            <h6 className="mt-3">
              Create and account to shop faster and to access your requests or
              favourites
            </h6>
          </div>
          <div className="mt-5">
            <form onSubmit={props.handleSubmit(onSubmit)} className="box-form">
              <Form.Field>
                <label> Name</label>
                <Field name="name" component={renderInput} index="text" />
              </Form.Field>
              <Form.Field>
                <label> Email</label>
                <Field name="email" component={renderInput} index="email" />
              </Form.Field>
              <Form.Field>
                <label> Password</label>
                <Field
                  name="password"
                  component={renderInput}
                  index="password"
                />
              </Form.Field>
              <Form.Field>
                <label> confirm password</label>
                <Field
                  name="confirmPassword"
                  component={renderInput}
                  index="password"
                />
              </Form.Field>
              <Form.Field>
                <label> phone</label>
                <Field name="phone" component={renderInput} index="number" />
              </Form.Field>
              <Form.Field>
                <label> Address</label>
                <Field name="Address" component={renderInput} index="text" />
              </Form.Field>
              <div className="mt-5">
                <button className="action_button_lg text-center">
                  Register
                  <span className="promise-btn__spinner-wrapper hidden">
                    <span className="spinner"></span>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="mt-5 posAb">
            <div className="my-3">
              <h6 className="my-3">
                <Link
                  onClick={() => setOpen(false)}
                  href="#"
                  className="d-flex align-items-center text-dark"
                >
                  <i className="fa mx-3 fa-mobile"></i>
                  <span>Login With Email</span>
                </Link>
              </h6>
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
}
export default reduxForm({
  form: "signUp",
})(RigesterUser);
