import React, { Component } from "react";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Joe",
          email: "joe@mailbox.co",
          phone: "(123)456-7890"
        }
      ]
    };
  }

  render() {
    return <div />;
  }
}

export default Contacts;
