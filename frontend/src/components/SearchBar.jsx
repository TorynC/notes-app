import React from 'react'
import '../styles/search.css'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

const SearchBar = ({value, onChange, handleSearch, onClearSearch}) => {
    
    return (
        <div className="searchbar-container">
            <input type="text"
             placeholder='Search Notes'
             className="Searchbar"
             value={value}
             onChange={onChange}
             />

            <IoMdClose className='clear-search' onClick={onClearSearch}/>        
            <FaMagnifyingGlass className="mag-glass" onClick={handleSearch}/>
        </div>
    )
}

export default SearchBar