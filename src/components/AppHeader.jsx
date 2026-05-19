import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo_26.png';
import notificationIcon from '/notification.svg';
import backArrowIcon from '/backarrow.svg';


export default function AppHeader() {
  const location = useLocation();
  const navigate = useNavigate();
/*   const [showMessageOverlay, setShowMessageOverlay] = useState(false); */
  const [showNotificationOverlay, setShowNotificationOverlay] = useState(false);
  const getHeaderContent = () => {
    const path = location.pathname;

    if (path === '/') {
      return null;
    }
    else if ( path === '/dashboard') {
      return {
        center: <img src={logo} alt="BLÅ SOL Festival Logo" className="h-auto max-h-[40px] w-auto" />,
        left: null,
        right: (
          <button className="w-[24px] h-[24px] onClick={() => setShowNotificationOverlay(true)}">
            <img src={notificationIcon} alt="Notifications" className="w-full h-full" />
          </button>
        )
      };
    }
    else if (['/friends', '/roles','/messages','/profile'].includes(path)) {
      const pageTitles = {
        '/friends': 'Venner',
        '/roles': 'Roller',
        '/messages': 'Beskeder',
        '/profile': 'Profil'
      };
      const title = pageTitles[path] || '';

      return {
        center: <h1 className="text-main-light font-title text-subheader-s">{title}</h1>,
        left: (
          <button onClick={() => navigate(-1)} className="flex items-center gap-2">
            <img src={backArrowIcon} alt="Back" className="h-[14px] w-auto" />
            <span className="text-main-dark font-body text-body font-medium">Gå tilbage</span>
          </button>
        ),
        right: (
          <button className="w-[24px] h-[24px]" onClick={() => setShowNotificationOverlay(true)}>
            <img src={notificationIcon} alt="Notifications" className="w-full h-full" />
          </button>
        )
      }; 
    }
    else {
      return {
        center: <img src={logo} alt="BLÅ SOL Festival Logo" className="h-auto max-h-[40px] w-auto" />,
        left: null,
        right: null
      };
    }
  };

  const headerContent = getHeaderContent();

  return (
    <>
      <header
        className={`w-full h-[60px] min-h-[60px] flex items-center justify-between px-5 sticky top-0 z-[9999] gap-x-[1vw] bg-white transition-colors duration-300`}
      >
      {/* Left Content */}
      <div className="flex-1 flex items-center">
        {headerContent.left}
      </div>

      {/* Center Content */}
      <div className="flex-1 flex justify-center">
        {headerContent.center}
      </div>

      {/* Right Content */}
      <div className="flex-1 flex justify-end items-center">
        {headerContent.right}
      </div>
    </header>

      {/*  Message Overlay 
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
      )} */}

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