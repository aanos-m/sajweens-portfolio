import Logo from './compnents/navigation/Logo';
import Nav from './compnents/navigation/Nav'

const NavBar = () => {
 
  return (
    <header className='bg-black sticky top-0 z-[50] mx-auto flex flex-wrap w-full items-center justify-between pt-2 font-openSans '>
        <Logo/>  
        <Nav/>
    </header>
    
  )
}

export default NavBar
