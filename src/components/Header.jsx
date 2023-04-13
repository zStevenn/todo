import { MdMenu, MdClose, MdLogout } from 'react-icons/md';
import Logo from '../assets/img/todo-mascott.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, logout } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [user, loading, error] = useAuthState(auth);

  // Array of nav items with id and name.
  const navElements = [
    { name: 'Home', href: '/' },
    { name: 'Registreren', href: '/register' },
    { name: 'Log in', href: '/login' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  // Toggles Navigation based on click
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        id="navbar"
        className={`flex justify-between items-center px-8 py-3 shadow shadow-primary z-10 bg-primary`}
      >
        {/* Hamburger Icon */}
        <button
          onClick={toggleNav}
          title="Open menu"
          className="md:hidden text-neutral-100 cursor-pointer text-3xl"
        >
          <MdMenu />
        </button>
        {/* Webpage Title */}
        <Link to="/" title="Steven's To-Do">
          <div className="flex justify-center items-center gap-1">
            <h1 className="text-neutral-100 text-sm flex flex-nowrap gap-2 items-center">
              Steven's
              <br />
              To-Do
            </h1>
            <img src={Logo} alt="Todo Mascott" className="max-h-10" />
          </div>
        </Link>
        {user && (
          <button onClick={handleLogout} title="Uitloggen">
            <MdLogout className="text-3xl text-neutral-100" />
          </button>
        )}
        {/* Navlist */}
        <ul className="hidden md:flex gap-8 text-neutral-100 text-lg">
          {navElements.map(({ id, name, href }) => (
            <li key={id}>
              <Link to={href} className="cursor-pointer" onClick={toggleNav}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={`md:hidden text-neutral-100 px-8 py-3 fixed w-screen h-screen top-0 bg-primary z-20 shadow-lg transition-all duration-700 ${
          showNav ? '-translate-x-full' : 'translate-x-0'
        }  `}
      >
        <div className="flex flex-row justify-between">
          {/* Hamburger Icon */}
          <button
            onClick={toggleNav}
            className="md:hidden text-neutral-100 cursor-pointer text-3xl transition-all duration-300"
          >
            <MdClose />
          </button>
          {/* Webpage Title */}
          <Link to="/">
            <div className="flex justify-center items-center gap-1">
              <h1 className="text-neutral-100 text-sm flex flex-nowrap gap-2 items-center">
                Steven's
                <br />
                To-Do
              </h1>
              <img src={Logo} alt="Todo Mascott" className="max-h-10" />
            </div>
          </Link>
        </div>
        <ul className="grid gap-4 my-4 text-xl text-neutral-100">
          {navElements.map(({ id, name, href }) => (
            <li key={id}>
              <Link to={href} className="cursor-pointer" onClick={toggleNav}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Einde Navbar */}
    </>
  );
}
