import { useState } from 'react';
import { Link } from 'react-router-dom';
import burger from '/burger.svg';
import closeIcon from '/closehvid.svg'; 

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'artister', path: '#' },
    { name: 'billeter', path: '#' },
    { name: 'frivillig', path: '/' },
    { name: 'partner', path: '#' },
    { name: 'blå shop', path: '#' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="z-50"
      >
        <img src={burger}
            className='w-[36px] h-auto'
        />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-main-light transition-all duration-500 ease-in-out
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
        onClick={closeMenu}
      >
        <div className="w-full p-[8vw] flex justify-end">
          <button onClick={closeMenu} className="w-[36px] h-[36px]">
            <img src={closeIcon} alt="Close Menu" className="w-full h-full" />
          </button>
        </div>

        <nav className="flex flex-col items-center px-[8vw]">
          <ul className="w-full text-left uppercase">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="py-4 border-b border-solid border-white border-opacity-10"
              >
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`font-title text-subheader-s text-white active:rotate-[15deg] transition-transform duration-300
                    ${item.path === '/' ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}