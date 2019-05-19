import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../context";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  // onShowClick = e => {
  //   this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  onDeleteClick = () => {};

  render() {


    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;


    return (
      <Consumer>
        {value.dispatch}
      </Consumer>


      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({ showContactInfo: !this.state.showContactInfo })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
