import React from 'react'
import '../styles/profileInfo.css'


const ProfileInfo = ({userInfo, onLogout}) => {
  

  const getInitials = (name) => {
    if (!name) return "";

    const words = name.split(" ");
    let initials = "";

    for (let i =0; i < Math.min(words.length, 2); i++) {
      initials += words[i][0];
    }
    return initials.toUpperCase();
  };

  return (
    <div className='profile-container'>
      <div className='icon'> {getInitials(userInfo.fullName)}</div>
        <div className='profile-text'>
          <p className='name'>{userInfo.fullName}</p>
          <button className='logout-btn' onClick={onLogout}> Logout</button>
        </div>
    </div>
  );
};

export default ProfileInfo;