import { Avatar, Button, Dropdown, Navbar, NavbarCollapse, TextInput } from "flowbite-react"
import { Link, useLocation } from "react-router-dom"
import {AiOutlineSearch} from 'react-icons/ai'
import { useSelector } from "react-redux";
// import {FaMoon} from 'react-icons/fa'
export default function Header() {
  const path=useLocation().pathname;
  const {currentUser}=useSelector(state=>state.user);
  return (
<>
<Navbar className="border-b-2 ">
    <Link to='/' className="self-center whitespace-nowrap text-sm sm:text-xl "><span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-yellow-500 rounded-lg text-white">RSVP</span>Hub</Link>
    <form>
      <TextInput placeholder="Search......" type="text" rightIcon={AiOutlineSearch} className="hidden  lg:inline"/>
    </form>
    <Button className="w-12 h-10 lg:hidden">
        <AiOutlineSearch/>
    </Button> 
    <div className="flex gap-2 md:order-2">
    {currentUser ? (
    <Dropdown arrowIcon={false} inline label={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}>
    <Dropdown.Header>
      <span className="block text-sm">@{currentUser.username}</span>
      <span className="block text-sm font-medium truncate">{currentUser.email}</span>
    </Dropdown.Header>
    <Link to={'/dashboard?tab=profile'}>
      <Dropdown.Item>
        Profile
      </Dropdown.Item>
    </Link>
    <Dropdown.Divider/>
    <Dropdown.Item>SignOut</Dropdown.Item>
    </Dropdown>
    ):(
      <>
      <Link to='/signin'>
            <Button gradientDuoTone='purpleToPink' outline>SignIn</Button>
        </Link>
        </>
    )}

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

