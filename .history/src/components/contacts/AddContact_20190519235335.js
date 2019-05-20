import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  render() {
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
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                className="form-control lg"
                placeholder="Enter Email"
              />
            </div>
            <div className="form-group"></div>
              <label htmlFor="phone">PHONE #</label>
              <input
                type="text"
                name="phone"
                className="form-control lg"
                placeholder="Enter Phone Number"
              />
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
