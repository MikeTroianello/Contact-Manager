import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">ADD CONTACT</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="name"
                className="form-control lg"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                className="form-control lg"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">PHONE #</label>
              <input
                type="text"
                name="phone"
                className="form-control lg"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={this.onChange}
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
