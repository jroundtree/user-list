import React from 'react';

const UserIcon = ({ className }) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
        <title/>
        <circle cx="12" cy="8" fill="currentColor" r="4"/>
        <path d="M20,19v1a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V19a6,6,0,0,1,6-6h4A6,6,0,0,1,20,19Z" fill="currentColor"/>
    </svg>
  )
}

export default UserIcon;