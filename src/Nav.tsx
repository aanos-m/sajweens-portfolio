import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!isOpen);
    }

  return (
    <>
        <nav className='flex text-white items-center justify-end p-4 '>
            <div className='md:flex sm:flex lg:flex gap-4 hidden w-full'>
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
            
            <button onClick={toggleNavbar} className='hidden xs:flex' id='openCloseBtn'>
                { isOpen ? <CloseIcon fontSize='medium' style={{color: "#fff"}}/> : <MenuIcon fontSize='medium' style={{color: "#fff"}}/> }
            </button>
            
            <div className='flex flex-col items-center justify-center gap-4'>
                { isOpen && (
                    <div className='flex flex-col items-center justify-center gap-4'>
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
                ) }
            </div>
        </nav>
    </>
    
  )
}

export default Nav