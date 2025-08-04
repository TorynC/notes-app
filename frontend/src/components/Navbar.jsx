import React from 'react'
import '../styles/index.css'
import '../styles/Navbar.css'
import ProfileInfo from './ProfileInfo.jsx';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import { useState } from 'react';

const Navbar = ({userInfo, onSearchNote, handleClearSearch}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const onClearSearch = () => {
    setSearchQuery("");
    handleClearSearch();
  };

  const handleSearch = () => {
    if(searchQuery) {
      onSearchNote(searchQuery);
    }
  };

  return (
    <div className='container'>
        <h2 className='line'> Notes </h2>
        <SearchBar 
        value={searchQuery}
        onChange={({target}) => {
          setSearchQuery(target.value);
        }}
        onClearSearch={onClearSearch}
        handleSearch={handleSearch}
        />
        <ProfileInfo userInfo={userInfo} onLogout={onLogout}/>
    </div>
  );
};

export default Navbar;
