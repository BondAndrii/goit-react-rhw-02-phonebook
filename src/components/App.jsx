import React from "react";

// import { nanoid } from "nanoid";

import { Component } from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import { ContactList } from "./ContactList/ContactList";

import { nanoid } from "nanoid";

 
export class App extends Component {
  
  state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    name: '',
    
  }
  addNewContact = ({name, number}) => {
    
    const contact = {
      id: nanoid(),
      name,
      number,
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
