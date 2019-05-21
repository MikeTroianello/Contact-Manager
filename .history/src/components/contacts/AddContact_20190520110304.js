import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    };
  };

  static defaultProps = {
    name: "Hank",
    email: "hank@mail.com",
    phone: "135-123-1234"
  };

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">ADD CONTACT</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                name="name"
                className="form-control lg"
                placeholder="Enter Name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                name="email"
                className="form-control lg"
                placeholder="Enter Email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">PHONE #</label>
              <input
                type="text"
                name="phone"
                className="form-control lg"
                placeholder="Enter Phone Number"
                defaultValue={phone}
                ref={this.phoneInput}
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
