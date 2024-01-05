import Logo from './Logo';
import Nav from './Nav'

const NavBar = () => {
 
  return (
    <header className='flex flex-wrap sticky top-0 w-full bg-black z-[50] items-center justify-between pt-2 font-openSans mx-auto'>
        <Logo/>  
        <Nav/>
    </header>
    
  )
}

export default NavBar
