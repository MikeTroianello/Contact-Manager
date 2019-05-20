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
              <label htmlFor="email">EMAIL</label>
              <label htmlFor="phone">PHONE #</label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
