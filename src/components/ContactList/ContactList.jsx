import React from "react";



export const ContactList = ({contacts, onDelete}) => {
    
    return (     
            <ul>
                {contacts.map(contact => {
                    // const { id, name, number } = contact;
                    return (
                        <>
                            <li key={contact.id}>
                                <p>{contact.name}:{contact.number}</p>
                                <button type="button" onClick={() => onDelete(contact.id)}>Delete</button>
                            </li>
                            
                        </>
                    )
                })}
            </ul>        
    )
}