import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Joe",
        email: "joe@mailbox.co",
        phone: "(123)456-7890"
      },
      {
        id: 2,
        name: "Mike",
        email: "mike@mailbox.co",
        phone: "(123)456-1111"
      },
      {
        id: 3,
        name: "Mark",
        email: "mark@mailbox.co",
        phone: "(123)456-2231"
      }
    ]
  };

  deleteContact = () => {
    console.log("made it to Contacts.js");
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
