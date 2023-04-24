import React from "react";

export const ContactList = ({contacts}) => {
    
    return (
        <>
            <h2>ContactList</h2>
            <ul>
                {contacts.map(contact => {
                    const { id, name } = contact;
                    return (
                        <li key={id}>{ name}</li>
                    )
                })}
            </ul>
        </>
    )
}