import React from 'react'
import { useNavigate } from 'react-router'

const NavBar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex sticky top-0 bg-black z-50 items-center justify-between pt-2 font-openSans' style={{width: '100%'}}>
        <div className='flex flex-row text-white pt-4 pb-4 pl-8 ' >
            {/* <circle className='rounded-xl text-white'> */}
                <p className='font-bold text-lg'> Snk. | sajween </p>
            {/* </circle> */}
            
        </div>
        <div className='flex flex-row text-white pt-4 pb-4 pr-8 justify-end gap-4'>
           <button className='font-bold text-lg' onClick={() => navigate('/')}>
                Home
            </button>
            <button className='font-bold text-lg' onClick={() => navigate('/about')}>
                About
            </button>
            <button className='font-bold text-lg'> 
                Resume
            </button> 
        </div>
    </div>
    
  )
}

export default NavBar
