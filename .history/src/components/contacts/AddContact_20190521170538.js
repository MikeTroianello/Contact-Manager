import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    //ERROR CHECK
    if (name === "") {
      this.setState({ errors: { name: "name is required" } });
    }

    if (email === "") {
      this.setState({ errors: { email: "email is required" } });
    }

    if (phone === "") {
      this.setState({ errors: { phone: "phone is required" } });
    }

    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    //CLEAR STATE
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">ADD CONTACT</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter the name"
                    value={name}
                    onChange={this.onChange}
                  />

                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={this.onChange}
                  />

                  <TextInputGroup
                    label="Phone Num."
                    name="phone"
                    placeholder="Enter the phone number"
                    value={phone}
                    onChange={this.onChange}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-light btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
