import { Button, Navbar, NavbarCollapse, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
import {AiOutlineSearch} from 'react-icons/ai'
// import {FaMoon} from 'react-icons/fa'
export default function Header() {
  return (
<>
<Navbar className="border-b-2 ">
    <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl "><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-yellow-500 rounded-lg text-white">RSVP</span>Hub</Link>
    <form>
      <TextInput placeholder="Search......" type="text" rightIcon={AiOutlineSearch} className="hidden md:inline lg:inline"/>
    </form>
    <Button className="w-12 h-10 lg:hidden">
        <AiOutlineSearch/>
    </Button> 
      <div className="flex gap-2 md:order-2">
        <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue'>SignIn</Button>
        </Link>
        <Navbar.Toggle/>
    </div>
    <NavbarCollapse>
        <Navbar.Link >
            <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link >
            <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link >
            <Link to='/event'>Events</Link>
        </Navbar.Link>
    </NavbarCollapse>
 
</Navbar>
</>
  )
}

