import React from 'react'
import { useNavigate } from 'react-router'

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-end sticky top-0 bg-black z-50' style={{width: '100%'}}>
        <section className='text-white flex flex-row p-4'>
           <button className='p-2 font-bold text-lg' onClick={() => navigate('/')}>
                Home
            </button>
            <button className='p-2 font-bold text-lg' onClick={() => navigate('/about')}>
                About
            </button>
            <button className='p-2 font-bold text-lg'> 
                Resume
            </button> 
        </section>
    </div>
  )
}

export default NavBar