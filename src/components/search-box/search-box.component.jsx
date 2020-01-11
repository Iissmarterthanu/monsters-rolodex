// this if a functional component that dosent need access to state

import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className = 'search'  // for styles
        type='search' 
        placeholder={ placeholder } 
        onChange={ handleChange } 
        />
)