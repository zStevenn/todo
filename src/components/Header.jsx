import { MdMenu, MdClose, MdLogout, MdPerson } from 'react-icons/md';
import Logo from '../assets/img/todo-mascott.png';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logout } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Alert from './Alert';
import Loading from './Loading';

export default function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const [popup, setPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupStatus, setPopupStatus] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  // Default nav items
  const navElements = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Register', href: '/register' },
    { id: 3, name: 'Log in', href: '/login' },
  ];

  // Nav items when user is logged in
  const userNavElements = [
    { id: 1, name: 'Home', href: '/' },
    { id: 4, name: 'Dashboard', href: '/dashboard' },
  ];

  // Toggles Navigation based on click
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLogout = async (e) => {
    e.preventDefault;

    try {
      await logout();
      setPopupTitle('Byeeee!');
      setPopupStatus('success');
      setPopupMessage('You have been successfully logged out.');
      setPopup(true);
      setShowNav(!showNav);
      setTimeout(() => {
        navigate('/');
        setPopup(false);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* Navbar */}
      {popup && (
        <Alert title={popupTitle} status={popupStatus} message={popupMessage} />
      )}
      {loading && <Loading />}
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
          <div className="flex justify-center items-center gap-1 cursor-pointer">
            <h1 className="text-neutral-100 text-sm flex flex-nowrap gap-2 items-center">
              Steven's
              <br />
              To-Do
            </h1>
            <img src={Logo} alt="Todo Mascott" className="max-h-10" />
          </div>
        </Link>
        {/* Navlist */}
        <ul className="hidden md:flex gap-8 text-neutral-100 text-lg">
          {!user &&
            navElements.map(({ id, name, href }) => (
              <li key={id}>
                <Link to={href} className="cursor-pointer" onClick={toggleNav}>
                  {name}
                </Link>
              </li>
            ))}
          {user &&
            userNavElements.map(({ id, name, href }) => (
              <li key={id}>
                <Link to={href} className="cursor-pointer" onClick={toggleNav}>
                  {name}
                </Link>
              </li>
            ))}
        </ul>
        {user && (
          <div className="flex gap-4">
            <Link to="/profile" title="Profile" className="hidden md:block">
              <MdPerson className="text-3xl text-neutral-100" />
            </Link>
            <button
              onClick={handleLogout}
              title="Log out"
              className="hidden md:block"
            >
              <MdLogout className="text-3xl text-neutral-100" />
            </button>
          </div>
        )}
      </nav>
      <div
        className={`md:hidden text-neutral-100 px-8 py-3 fixed w-screen h-screen top-0 left-0 bg-primary z-20 shadow-lg transition-all ease-in duration-500 rounded-br-full flex flex-col gap-16 ${
          showNav
            ? '-translate-x-full -translate-y-full'
            : 'translate-x-0 translate-y-0 left-none'
        }  `}
      >
        <div className="flex flex-row justify-between">
          <button
            onClick={toggleNav}
            className="md:hidden text-neutral-100 cursor-pointer text-3xl transition-all duration-300"
          >
            <MdClose />
          </button>
          <Link to="/" title="Steven's To-Do">
            <div className="flex justify-center items-center gap-1 cursor-pointer">
              <h1 className="text-neutral-100 text-sm flex flex-nowrap gap-2 items-center">
                Steven's
                <br />
                To-Do
              </h1>
              <img src={Logo} alt="Todo Mascott" className="max-h-10" />
            </div>
          </Link>
        </div>
        <ul className="grid gap-4 text-xl text-neutral-100">
          {!user &&
            navElements.map(({ id, name, href }) => (
              <li key={id}>
                <Link to={href} className="cursor-pointer" onClick={toggleNav}>
                  {name}
                </Link>
              </li>
            ))}
          {user &&
            userNavElements.map(({ id, name, href }) => (
              <li key={id}>
                <Link to={href} className="cursor-pointer" onClick={toggleNav}>
                  {name}
                </Link>
              </li>
            ))}
        </ul>
        {user && (
          <div className="flex gap-4">
            <Link
              to="/profile"
              title="Profile"
              className="w-fit flex flex-row justify-center items-center bg-melon hover:bg-melon-hover text-white rounded-md px-4 py-2 cursor-pointer transition-colors duration-300"
            >
              <MdPerson className="text-2xl text-neutral-100" />
              Profile
            </Link>
            <button
              onClick={handleLogout}
              title="Logout"
              className="w-fit flex flex-row justify-center items-center bg-melon hover:bg-melon-hover text-white rounded-md px-4 py-2 cursor-pointer transition-colors duration-300"
            >
              <MdLogout className="text-2xl text-neutral-100" /> Log out
            </button>
          </div>
        )}
      </div>
      {/* Einde Navbar */}
    </>
  );
}
