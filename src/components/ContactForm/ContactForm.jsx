
import React, { Component } from "react";



export class ContactForm extends Component {
    state = {
        
        name:'',
    };
    handleChange = (event) => {
        // патерн керуючого елементу. З клавіатури знімається те, що воодить юзер та записується в стейт. А на екран вивиодиться, те, що записано в стейті.
        //Тобто ми вклинюємся між юзер - клавіатурою і юзер - екраном, можемо робити маніпуляції, валідацію, цензуру з тим, що юзер вводить і відображати
        // в інпуті те, що пройшло через наші маніпуляції з введеним з клавіатури
        const { value } = event.currentTarget;       
        this.setState({ name: value });       
    }
    handleSubmit = (event) => {       
        event.preventDefault();
        this.props.onSubmit(this.state.name);
        // console.log(this.state.name)
        this.reset();
                      
    }
    reset = () => {
    this.setState({name: '' })
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