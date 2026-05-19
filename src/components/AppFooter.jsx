import { Link, useLocation } from 'react-router-dom';
import navFriendsActIcon from '/nav-friends-act.svg';
import navFriendsIcon from '/nav-friends.svg';
import navHomeActIcon from '/nav-home-act.svg';
import navHomeIcon from '/nav-home.svg';
import navMessageActIcon from '/nav-message-act.svg';
import navMessageIcon from '/nav-message.svg';
import navProfileActIcon from '/nav-profile-act.svg';
import navProfileIcon from '/nav-profile.svg';
import navRolesActIcon from '/nav-profile-act.svg';
import navRolesIcon from '/nav-roles.svg';


export default function AppFooter() {
  const location = useLocation();
  const noFeet = ['/', '/signup', '/login']

  if (noFeet.includes(location.pathname)) {
    return null;
  }

     const navItems = [
    { path: '/friends', icon: navFriendsIcon, activeIcon: navFriendsActIcon, label: 'Venner' },
    { path: '/roles', icon: navRolesIcon, activeIcon: navRolesActIcon, label: 'Roller' },
    { path: '/dashboard', icon: navHomeIcon, activeIcon: navHomeActIcon, label: 'Hjemme' },
    { path: '/messages', icon: navMessageIcon, activeIcon: navMessageActIcon, label: 'Beskeder' },
    { path: '/profile', icon: navProfileIcon, activeIcon: navProfileActIcon, label: 'Profil' }
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full h-[10vh] bg-main-pink z-[9999]">
      <div className="w-full h-full flex justify-evenly items-center">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={index}
              to={item.path}
              className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <img
                src={isActive ? item.activeIcon : item.icon}
                alt={item.label}
                className="w-[28px] h-auto"
              />
              <span className="text-main-dark font-body text-body text-accent font-medium">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}