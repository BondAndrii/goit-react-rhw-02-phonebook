import React from "react";

// import { nanoid } from "nanoid";

import { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import { ContactList } from "./ContactList/ContactList";

import { nanoid } from "nanoid";

 
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
  addNewContact = (name) => {
    
    const contact = {
      id: nanoid(),
      name,
    }
    this.setState(prevState => ({ contacts: [ ...prevState.contacts, contact,] }))
    console.log(this.state);    
  }

  render() {
    const { contacts } = this.state;
    console.log("in render", this.state)
    return (
    <div>
        <ContactForm onSubmit={this.addNewContact} />
        <ContactList contacts={contacts } />
    </div>
  );
  }
  
};
