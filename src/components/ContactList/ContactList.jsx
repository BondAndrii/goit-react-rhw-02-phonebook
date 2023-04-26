import React from "react";



export const ContactList = ({contacts}) => {
    
    return (     
            <ul>
                {contacts.map(contact => {
                    const { id, name, number } = contact;
                    return (
                        <li key={id}>{name}:{number}</li>
                    )
                })}
            </ul>        
    )
}