import { useState } from 'react';
import { Link } from 'react-router-dom';
import defaultProfile from '/defaultprofile.svg';
import defaultFriend from '/defaultfriend.svg';
import editIcon from '/edit.svg';
import searchIcon from '/search.svg';
import deleteIcon from '/delete.svg';

export default function Dashboard() {
  // Default dummy data (will be replaced with real user data later)
  const [userData, setUserData] = useState({
    profilePicture: null, // Will be user's profile picture URL
    name: null,           // Will be user's name
    role: null,           // Will be user's role
    friendGroup: null,    // Will be user's friend group
    friends: null,
    teamTitle: null,
    contactPerson: null,
    applications: null,
    appliedWithFriends: null,
  });

  // Default values
  const defaultData = {
    profilePicture: defaultProfile,
    name: "Rico",
    role: "-",
    friendGroup: "-",
    friends: [],
    teamTitle: "ingen venner tilføjet endnu",
    contactPerson: null,
    applications: [],
    appliedWithFriends: false
  };

  // Use default data if user data is empty
  const displayData = {
    profilePicture: userData.profilePicture || defaultData.profilePicture,
    name: userData.name || defaultData.name,
    role: userData.role || defaultData.role,
    friendGroup: userData.friendGroup || defaultData.friendGroup,
    friends: userData.friends || defaultData.friends,
    teamTitle: userData.teamTitle || defaultData.teamTitle,
    contactPerson: userData.contactPerson || defaultData.contactPerson,
    applications: userData.applications || defaultData.applications,
    appliedwithFriends: userData.appliedWithFriends ?? defaultData.appliedWithFriends
  };

  return (
    <div className="min-h-screen bg-main-bgcolor">
      {/* First Section - Profile Card */}
      <div
        className='w-[95vw] h-[20vh] m-4 mx-auto bg-cardbg3 relative' 
        >
        <div className="flex items-center h-full gap-4">
          {/* Profile Picture */}
          <div className="w-[30vw] mx-2 h-full flex-shrink-0">
            <img
              src={displayData.profilePicture}
              alt="Profile"
              className="w-full h-full object-fit rounded-full drop-shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-center flex-1">
            {/* Title with Edit Button */}
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-white text-shadow-title uppercase font-title text-subheader-s">
                Hejsa, {displayData.name}
              </h1>
              <Link to="/profile" className="hover:opacity-80 transition-opacity">
                <img src={editIcon} alt="Edit" className="h-8 w-8" />
              </Link>
            </div>

            {/* Labels with Overlay Effect */}
            <div className="flex gap-4">
              {/* Role Label */}
              <div className="relative inline-block">
                <div className="relative px-4 py-2 bg-white text-main-dark font-body text-body shadow-label">
                  Rolle: {displayData.role}
                </div>
              </div>

              {/* Friend Group Label */}
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
                <div className="relative px-4 py-2 bg-white text-main-dark font-body text-body shadow-label">
                  Hold: {displayData.friendGroup}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Friends Section */}
      <div className="py-4">
        <h2 className="text-main-dark font-title text-subheader-s uppercase m-4">
          Dit venner hold:
        </h2>

        <div
          className="w-[95vw] h-[20vh] m-2 mx-auto bg-friendcard relative"
        >
          {/* Team Title (if exists) */}
          {displayData.teamTitle && (
            <div className="absolute top-0 left-0 bg-white uppercase text-main-dark font-title text-body shadow-label p-2">
              {displayData.teamTitle}
            </div>
          )}

          {/* Search Icon (top right) */}
          <Link to="/friends" className="absolute -top-6 -right-2 w-12 h-12">
            <img src={searchIcon} alt="Search Friends" className="h-12 w-12" />
          </Link>

          {/* Friends List or Fallback Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
            {displayData.friends && displayData.friends.length > 0 ? (
              <>
                {/* Team Title (if not shown above) */}
                {!displayData.teamTitle && (
                  <h3 className="bg-white text-main-dark font-title text-body shadow-label p-2 mb-4">
                    {displayData.teamTitle || "Mit hold"}
                  </h3>
                )}

                {/* Friends List */}
                <div className="flex gap-4 overflow-x-auto w-full">
                  {displayData.friends.map((friend, index) => (
                    <div key={index} className="flex flex-col items-center flex-shrink-0">
                      <img
                        src={friend.profilePicture || defaultFriend}
                        alt={friend.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <p className="text-main-dark font-body text-sm truncate w-12 text-center">
                        {friend.name}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Fallback Text */
              <p className="text-main-dark font-body font-regular tracking-[var(--text-letter-spacing)] pt-4">
                Find dine venner i databasen, opret dit hold og ansøg om frivillige roller sammen.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Third Section - Role and Contact Person */}
      <div className="flex w-[95vw] mx-auto gap-4 p-2">
        {/* Role Card */}
        <div className="w-1/2">
          <h2 className="text-main-dark font-title text-subheader-s uppercase mb-2">
            Rolle:
          </h2>
          <div
            className="w-full h-[20vh] bg-cover bg-center bg-cardbg3 relative"
          >
            {displayData.userRole ? (
              <>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <img src={roleIcon} alt="Role" className="h-12 w-12 mb-2" />
                  <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
                    {displayData.userRole}
                  </p>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <Link
                    to="/roles"
                    className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
                  >
                    Søg
                  </Link>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <p className="text-main-dark font-body text-body uppercase font-[500] tracking-[var(--text-letter-spacing)] text-center pt-6 m-2">
                  Ikke tildelt en rolle endnu
                </p>
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] text-center mb-4">
                  Klik på "Søg" for at finde en
                </p>
                <div className="relative w-[130%] h-[60px] mt-4 translate-y-[1vh]">
                  <div className="absolute w-[100%] mx-auto inset-0 transform -translate-y-[5px] bg-main-pink rotate-[1deg]"></div>
                  <Link
                    to="/roles"
                    className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium mx-auto w-[98%] block py-3 bg-main-dark text-white text-center font-body text-accent font-medium rotate-[2deg] z-10"
                  >
                    Søg
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Person Card */}
        <div className="w-1/2">
          <h2 className="text-main-dark font-title text-subheader-s uppercase mb-2 wrap-break-word">
            Kontakt-person:
          </h2>
          <div
            className="w-full h-[20vh] bg-cover bg-center bg-cardbg1 relative"
          >
            {displayData.contactPerson ? (
              <>
                <div className="absolute inset-0 flex flex-col p-4">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Profile Picture */}
                    <div className="w-1/2">
                      <img
                        src={displayData.contactPerson.profilePicture || defaultProfile}
                        alt={displayData.contactPerson.name}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                    {/* Name and Role */}
                    <div className="w-1/2">
                      <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-2">
                        {displayData.contactPerson.name}
                      </p>
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
                        <div className="relative px-3 py-1 bg-white text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)] -rotate-[1deg] z-10">
                          {displayData.contactPerson.role}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Send Message Button */}
                  <div className="flex justify-center mt-auto">
                    <button className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity">
                      Send besked
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <p className="text-main-dark font-body text-body uppercase font-[500] tracking-[var(--text-letter-spacing)] text-center mb-2">
                  Ikke tildelt en kontaktperson endnu
                </p>
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] text-center">
                  Kontaktoplysninger vises her, når du er tildelt en rolle
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fourth Section - Mine Ansøgninger */}
      <div className="w-[95vw] mx-auto pt-2 pb-16">
        <h2 className="text-main-dark font-title text-subheader-s uppercase mb-4">
          Mine Ansøgninger
        </h2>

        <div className="w-full h-[20vh] bg-cardbg3 relative">
          {userData.applications ? (
            <div className="absolute inset-0 flex flex-col p-4">
              {/* Role */}
              <p className="text-main-dark font-body text-accent font-semibold text-left tracking-[var(--text-letter-spacing)] mb-2">
                Rolle: {displayData.role}
              </p>

              {/* Applied with friends */}
              {displayData.appliedWithFriends && (
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-4">
                  Ansøgt med venner
                </p>
              )}

              {/* Application Status Sections */}
              <div className="flex justify-center gap-8 mb-4 text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
                <span>Ansøgt</span>
                <span>Godkendt</span>
                <span>Hold tildelt</span>
              </div>

              {/* Delete Application */}
              <div className="flex items-center justify-center gap-2">
                <img src={deleteIcon} alt="Delete" className="h-5 w-5" />
                <button className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
                  Slet ansøgning
                </button>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 flex flex-col p-4">
              <p className="text-main-dark font-body text-body uppercase font-[500] tracking-[var(--text-letter-spacing)] text-left m-2">
                Ingen ansøgninger endnu
              </p>
              <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] text-left m-2 pt-6">
                Når du ansøger om en rolle, kan du følge status her
              </p>
            </div>
          )}
        </div>
      </div>
      <div className='py-8'></div>
    </div>
  );
}