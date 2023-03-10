import { MdMenu, MdClose } from 'react-icons/md';
import Logo from '../assets/img/todo-mascott.png';
import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Registreren', href: '/register' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure
      as="nav"
      className="bg-primary text-white relative lg:flex lg:justify-between lg:items-center"
    >
      {({ open }) => (
        <>
          <div className="flex justify-between items-center lg:flex-1 px-6 py-3">
            <Disclosure.Button
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <MdClose className="text-4xl" />
              ) : (
                <MdMenu className="text-4xl" />
              )}
            </Disclosure.Button>

            <Link to="/">
              <div className="flex justify-center items-center gap-1">
                <p className="text-sm">
                  Steven's
                  <br />
                  To-Do
                </p>
                <img src={Logo} alt="Todo Mascott" className="max-h-10" />
              </div>
            </Link>
          </div>
          <Disclosure.Panel
            className={`lg:flex lg:items-center lg:justify-end lg:flex-1 lg:px-6 lg:py-3 absolute top-full left-0 w-full bg-primary z-10 transition-all duration-300 transform ${
              open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
