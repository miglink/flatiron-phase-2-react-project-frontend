import React from 'react';
import Character from './Character';

const SearchBox = ({}) => (

    <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-lightest-blue'
            type="search" 
            placeholder="search disney characters"
            onChange={searchChange}>
        </input>
    </div>
)

export default SearchBox;