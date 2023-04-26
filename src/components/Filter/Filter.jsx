import React from "react";

export const Filter = ({filter, onChange}) => {
    return (
        <label>Find contacts by name
            <input value={filter} onChange={onChange}/> 
        </label>
        
    )
}