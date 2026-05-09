import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import burger from '/burger.svg';
import logo from '/logo_26.png';
import messageIcon from '/message.svg';
import notificationIcon from '/notification.svg';
import BurgerMenu from './Burger'; // Your existing Burger component

export default function Header() {
  const location = useLocation();
  const [showMessageOverlay, setShowMessageOverlay] = useState(false);
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(false);

  // Don't render this header on Landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <header className="w-full h-[60px] min-h-[60px] flex items-center justify-between px-5 sticky top-0 z-[9999] gap-x-[1vw] bg-main-bgcolor">
        {/* Burger Menu (Left) */}
        <BurgerMenu />

        {/* Logo (Center) */}
        <Link to="/" className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="BLÅ SOL Festival Logo"
            className="h-auto max-h-[60px] w-auto"
          />
        </Link>

        {/* Right Icons */}
        <div className="flex gap-4">
          <button
            onClick={() => setShowMessageOverlay(true)}
            className="w-[24px] h-[24px]"
          >
            <img src={messageIcon} alt="Messages" className="w-full h-full" />
          </button>
          <button
            onClick={() => setShowNotificationOverlay(true)}
            className="w-[24px] h-[24px]"
          >
            <img src={notificationIcon} alt="Notifications" className="w-full h-full" />
          </button>
        </div>
      </header>

      {/* Message Overlay */}
      {showMessageOverlay && (
        <div className="fixed top-[60px] right-0 bg-main-bgcolor p-4 shadow-lg z-[9998] rounded-bl-lg">
          <p className="text-main-dark font-body text-body">intet at vise lige nu</p>
          <button
            onClick={() => setShowMessageOverlay(false)}
            className="absolute top-2 right-2 text-main-dark hover:opacity-70"
          >
            ×
          </button>
        </div>
      )}

      {/* Notification Overlay */}
      {showNotificationOverlay && (
        <div className="fixed top-[60px] right-0 bg-main-bgcolor p-4 shadow-lg z-[9998] rounded-bl-lg mt-16">
          <p className="text-main-dark font-body text-body">intet at vise lige nu</p>
          <button
            onClick={() => setShowNotificationOverlay(false)}
            className="absolute top-2 right-2 text-main-dark hover:opacity-70"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}