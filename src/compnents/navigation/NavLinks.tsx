import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavLinks = () => {
    const navigate = useNavigate();
  return (
    <>
        <button className='font-bold text-lg text-white' onClick={() => navigate('/')}>
            Home
        </button>
        <button className='font-bold text-lg text-white' onClick={() => navigate('/about')}>
            About
        </button>
        <button className='font-bold text-lg text-white'> 
            Resume
        </button> 
    </>
  )
}

export default NavLinks