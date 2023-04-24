
import React, { Component } from "react";



export class ContactForm extends Component {
    state = {
        name:'',
    };
    handleChange = (event) => {
        const { value } = event.target;
        if (value === "кіт") {
            this.setState({ name: "cat" })
        } else {
            this.setState({name:value})
        }
        
    }
    handleSubmit = (event) => {
        
        event.preventDefault();
        console.log(this.state.name)
        
        }
    render() {
        const { name } = this.state;
    return (
        <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
                <label>
                    <p>Name</p>                    
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                    /> 
                </label>
                <button type="submit" >Add contact</button>
            </form>
        </>
        )
    }
}