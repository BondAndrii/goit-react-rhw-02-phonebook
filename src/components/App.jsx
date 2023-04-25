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
    // const { contacts } = this.state;
    const id = nanoid();
    this.setState(prevState => ({ contacts: [{ id, name }, ...prevState.contacts] }))
    console.log(this.state);
    // this.setState(prevState => prevState.contacts.push({ id, name }))
    // console.log(this.state);
  }
  
  render() {
    const { contacts } = this.state;
    
    return (
    <div>
        <ContactForm onSubmit={this.addNewContact} />
        <ContactList contacts={contacts } />
    </div>
  );
  }
  
};
