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
      </div>
    );
  }
}

export default AddContact;
