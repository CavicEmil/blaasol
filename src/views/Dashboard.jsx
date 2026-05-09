import { useState } from 'react';
import { Link } from 'react-router-dom';
import lofiProfile from '/lofiprofile.png';
import editIcon from '/edit.svg';
import addUserIcon from '/add-user.svg';
import closeIcon from '/closehvid.svg';
import searchIcon from '/search.svg';

export default function Dashboard() {
  const [showAddFriends, setShowAddFriends] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-main-bgcolor pt-[15vh] p-4 space-y-4">
      {/* Profile Card (20% screen height) */}
      <div className="h-[20vh] flex flex-col items-center justify-center px-4 relative">
        <img
          src={lofiProfile}
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        <div className="flex items-center gap-2">
          <h2 className="text-main-light font-title text-subheader-s">
            Hejså Rico!
          </h2>
          <Link to="/profile" className="hover:opacity-80 transition-opacity">
            <img src={editIcon} alt="Edit Profile" className="h-6 w-6" />
          </Link>
        </div>
      </div>

      {/* Crew Card */}
      <div className="bg-white/10 p-4 rounded-lg">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-main-dark font-title text-subheader-s mb-2">
              Dit crew:
            </h3>
            <p className="text-main-light font-body text-accent font-medium">
              Du har ingen venner tilføjet
            </p>
          </div>
          <button
            onClick={() => setShowAddFriends(true)}
            className="h-[40px] w-[40px] flex-shrink-0"
          >
            <img
              src={addUserIcon}
              alt="Add Friends"
              className="h-full w-full"
            />
          </button>
        </div>
      </div>

      {/* Tasks Card */}
      <div className="bg-white/10 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-main-dark font-title text-subheader-s mb-2">
              Dine Opgaver:
            </h3>
            <p className="text-main-light font-body text-accent font-medium">
              Du har ikke fået tildelt en opgave endnu
            </p>
          </div>
          <Link
            to="/roles"
            className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity flex items-center gap-2"
            >
            søg
            <span className="text-lg">{'>'}</span>
          </Link>
        </div>
      </div>

      {/* AddFriends Overlay with Search */}
      {showAddFriends && (
        <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-start pt-[10vh] z-50">
          <div className="bg-main-bgcolor w-[90%] max-w-md rounded-lg p-6 relative">
            {/* Close Button (Top Right) */}
            <button
              onClick={() => setShowAddFriends(false)}
              className="absolute top-4 right-4 w-[36px] h-[36px] p-1"
            >
              <img src={closeIcon} alt="Close" className="w-full h-full" />
            </button>

            {/* Title */}
            <h2 className="text-main-light font-title text-subheader-s mb-6 text-center">
              Tilføj venner
            </h2>

            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Navn, E-Mail, Telefonnr.,.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 bg-transparent border border-white/50 rounded-none text-white placeholder-white/70 focus:outline-none focus:border-main-light"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <img src={searchIcon} alt="Search" className="h-5 w-5" />
              </div>
            </div>

            {/* Placeholder for search results */}
            <div className="text-center text-white/70">
              <p>Søg efter venner for at tilføje dem til dit crew</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}