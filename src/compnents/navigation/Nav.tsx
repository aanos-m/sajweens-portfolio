import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import NavLinks from './NavLinks';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNavbar = () => {
        setOpen(!isOpen);
    }

  return (
    <>
        <nav className='flex text-white items-center justify-end p-4 '>
            <div className='md:flex sm:flex lg:flex gap-4 hidden w-full'>
                <NavLinks/>
            </div>
            
            <div className='hidden xs:flex'> 
               <button onClick={toggleNavbar} >
                    { isOpen ? <CloseIcon fontSize='medium' style={{color: "#fff"}}/> : <MenuIcon fontSize='medium' style={{color: "#fff"}}/> }
                </button> 
            </div>
        </nav>    
        { isOpen && (
            <div className='flex flex-col items-center justify-center basis-full gap-4 z-99 pb-2 border-b-2 border-grey'>
                <NavLinks/>
            </div>
        ) }
        
    </>
    
  )
}

export default Nav