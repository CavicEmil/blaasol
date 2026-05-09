import { Link, useLocation } from 'react-router-dom';
import homeIcon from '/home.svg';
import rolesIcon from '/roles.svg';
import lofiProfile from '/lofiprofile.png';

export default function Footer() {
  const location = useLocation();

  // Don't render this footer on Landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[10vh] bg-main-bgcolor border-t border-solid border-main-light z-[9999]">
      <div className="w-full h-full flex justify-evenly items-center px-4">
        {/* Home Icon */}
        <Link to="/dashboard" className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
          <img src={homeIcon} alt="Dashboard" className="h-[24px] w-auto" />
        </Link>

        {/* Roles Icon */}
        <Link to="/roles" className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
          <img src={rolesIcon} alt="Roles" className="h-[24px] w-auto" />
        </Link>

        {/* Profile Icon */}
        <Link to="/profile" className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
          <img src={lofiProfile} alt="Profile" className="h-[24px] w-auto" />
        </Link>
      </div>
    </footer>
  );
}