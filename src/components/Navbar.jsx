import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <header className='header flex justify-between items-center p-4 bg-transparent shadow-md fixed top-0 left-0 w-full z-50'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-20 h-20 transform rotate-180' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
