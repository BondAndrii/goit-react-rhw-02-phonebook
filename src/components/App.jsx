import React from "react";

// import { nanoid } from "nanoid";

import { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import { ContactList } from "./ContactList/ContactList";


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson'},
    {id: 'id-2', name: 'Hermione Kline'},
    {id: 'id-3', name: 'Eden Clements'},
    {id: 'id-4', name: 'Annie Copeland'},
  ],
    name: '',
    
  }
  addNewContact = () => {
    console.log("click");
  }
  
  render() {
    const { contacts } = this.state;
    
    return (
    <div>
        <ContactForm  />
        <ContactList contacts={contacts } />
    </div>
  );
  }
  
};
