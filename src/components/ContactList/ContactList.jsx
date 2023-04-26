import React from "react";

import { Filter } from "components/Filter/Filter";

export const ContactList = ({contacts, filter, onChange}) => {
    
    return (
        <>
            <h2>ContactList</h2>
            <Filter filter={filter} onChange={onChange} />
            <ul>
                {contacts.map(contact => {
                    const { id, name, number } = contact;
                    return (
                        <li key={id}>{name}:{number}</li>
                    )
                })}
            </ul>
        </>
    )
}