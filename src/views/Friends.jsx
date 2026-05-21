import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cardBg3 from '/cardbg3.svg';
import deleteIcon from '/delete.svg';
import searchIcon from '/search.svg';
import editIcon from '/edit.svg';
import defaultFriend from '/defaultfriend.svg';

// Dummy users data
const dummyUsers = [
  { id: 1892, name: "Mikkel", lastname: "Søren", email: "sexysoeren@hotmail.com", role: null, team: null, profileImg: "1892.png" },
  { id: 1090, name: "Mikkel", lastname: "Sørensen", email: "m.soerensen@mail.com", role: null, team: null, profileImg: "1090.png" },
  { id: 5558, name: "Mikkel", lastname: "Jensen Sørensen", email: "mijose@mail.com", role: null, team: "Party Animals", profileImg: "5558.png" },
  { id: 8794, name: "Ida", lastname: "Madsen", email: "madida@mail.com", role: null, team: null, profileImg: null },
  { id: 6472, name: "Ida", lastname: "Madsen", email: "idamadsen@mail.com", role: "Renovation", team: "Festival Survivors", profileImg: "6742.png" },
  { id: 1948, name: "Ida", lastname: "Madsen Hansen", email: "ihanmad@gmail.com", role: "Fence Guard", team: "best guards", profileImg: null },
  { id: 1234, name: "Freja", lastname: "Nielsen", email: "therealfreja@mail.com", role: null, team: null, profileImg: "1234.png" }
];

// Helper function to get profile image URL
const getProfileImg = (user) => {
  if (!user?.profileImg) return defaultFriend;
  try {
    return require(`../public/${user.profileImg}`);
  } catch {
    return defaultFriend;
  }
};

export default function Friends() {
  // Dummy user ID
  const userId = 1337;
  const navigate = useNavigate();

  // State for friend team
  const [friendTeam, setFriendTeam] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editingTeamName, setEditingTeamName] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [showRemoveConfirmation, setShowRemoveConfirmation] = useState(false);
  const [userToRemove, setUserToRemove] = useState(null);
  const [isRemovingFromInvited, setIsRemovingFromInvited] = useState(false);
  const [invitationsSent, setInvitationsSent] = useState(false);

  // Create a new friend team
  const createFriendTeam = () => {
    const newTeam = {
      id: Date.now(),
      founderId: userId,
      name: '',
      members: [userId],
      invited: []
    };
    setFriendTeam(newTeam);
    setTeamName('');
    setInvitationsSent(false);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = dummyUsers.filter(user =>
      user.id.toString().includes(searchQuery) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  // Add user to invited list
  const addToInvited = (user) => {
    if (!friendTeam) return;

    if (friendTeam.invited.some(u => u.id === user.id) ||
        friendTeam.members.some(id => id === user.id)) {
      return;
    }

    setFriendTeam(prev => ({
      ...prev,
      invited: [...prev.invited, user]
    }));
  };

  // Remove user from invited list
  const removeFromInvited = (userId) => {
    setFriendTeam(prev => ({
      ...prev,
      invited: prev.invited.filter(user => user.id !== userId)
    }));
    setShowRemoveConfirmation(false);
  };

  // Add user directly to members (shortcut)
  const addToMembers = (user) => {
    if (!friendTeam) return;

    const updatedInvited = friendTeam.invited.filter(u => u.id !== user.id);
    if (!friendTeam.members.some(id => id === user.id)) {
      setFriendTeam(prev => ({
        ...prev,
        members: [...prev.members, user.id],
        invited: updatedInvited
      }));
    }
  };

  // Handle team name edit
  const handleTeamNameEdit = () => {
    setEditingTeamName(true);
  };

  const handleTeamNameSave = () => {
    setEditingTeamName(false);
    setFriendTeam(prev => ({
      ...prev,
      name: teamName
    }));
  };

  // Send invitations
  const sendInvitations = () => {
    setSearchQuery('');
    setSearchResults([]);
    setInvitationsSent(true);
  };

  // Get user by ID (for displaying members)
  const getUserById = (id) => {
    return dummyUsers.find(user => user.id === id);
  };

  return (
    <div className="min-h-screen bg-main-bgcolor p-4 space-y-6">
      {!friendTeam ? (
        // Initial view - No friends added yet
        <div className="w-[95vw] mx-auto">
          <h1 className="text-main-dark font-title text-subheader-s mb-6">
            Dit vennerhold
          </h1>

          <div className="w-full bg-cover bg-center bg-cardbg3 p-6 relative">
            <p className="text-main-dark font-body text-accent uppercase tracking-[var(--text-letter-spacing)] mb-2">
              Ingen venner tilføjet endnu
            </p>
            <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-6">
              Inviter dine venner, opret et hold, og ansøg om frivillige roller sammen.
            </p>
            <button
              onClick={createFriendTeam}
              className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
            >
              Inviter
            </button>
          </div>
        </div>
      ) : (
        // Friend team created view
        <div className="space-y-6">
          {/* Search Card */}
          <div className="w-[95vw] mx-auto">
            <div className="w-full bg-cover bg-center bg-cardbg3 p-6 relative">
              {/* Delete button */}
              <button
                onClick={() => setFriendTeam(null)}
                className="absolute top-4 right-4"
              >
                <img src={deleteIcon} alt="Delete" className="h-6 w-6" />
              </button>

              {/* Title */}
              <h2 className="text-main-dark font-title text-subheader-s uppercase mb-4">
                {friendTeam.name || "Nyt vennerhold"}
              </h2>

              {/* Description */}
              <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-6">
                Søg efter navn, e-mail, telefon eller frivillig-ID
              </p>

              {/* Search input */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <img
                    src={searchIcon}
                    alt="Search"
                    className="absolute left-0 top-0 h-full w-[40px] bg-main-pink p-2"
                  />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Søg"
                    className="w-full pl-[40px] p-3 bg-main-pink border-0 text-main-dark font-body text-body"
                  />
                </div>
              </form>

              {/* Search Results */}
              {searchQuery && searchResults.length > 0 && (
                <div className="space-y-4 mb-6">
                  {searchResults.map(user => (
                    <div
                      key={user.id}
                      className="flex items-start gap-4 p-3 bg-white bg-opacity-70 rounded-lg"
                      onClick={() => addToInvited(user)}
                    >
                      <img
                        src={getProfileImg(user)}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-main-dark font-body text-body font-semibold tracking-[var(--text-letter-spacing)]">
                          {user.name} {user.lastname}
                        </p>
                        <p className="text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)]">
                          ID: {user.id}
                        </p>
                        <p className="text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)]">
                          {user.email}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
                            <div className="relative px-3 py-1 bg-white text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)] -rotate-[1deg] z-10">
                              Rolle: {user.role || "-"}
                            </div>
                          </div>
                          <div className="relative inline-block">
                            <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
                            <div className="relative px-3 py-1 bg-white text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)] -rotate-[1deg] z-10">
                              Hold: {user.team || "-"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Invited Section (only visible before sending invitations) */}
              {!invitationsSent && friendTeam.invited.length > 0 && (
                <>
                  <h3 className="text-main-dark font-title text-subheader-s mb-4">
                    Inviteret:
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    {friendTeam.invited.map(user => (
                      <div key={user.id} className="flex flex-col items-center relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setUserToRemove(user.id);
                            setIsRemovingFromInvited(true);
                            setShowRemoveConfirmation(true);
                          }}
                          className="absolute -top-2 -right-2 bg-white rounded-full p-1"
                        >
                          <img src={deleteIcon} alt="Remove" className="h-4 w-4" />
                        </button>
                        <img
                          src={getProfileImg(user)}
                          alt={user.name}
                          className="w-16 h-16 rounded-full object-cover"
                          onClick={() => addToMembers(user)}
                        />
                        <p className="text-main-dark font-body text-body font-semibold tracking-[var(--text-letter-spacing)]">
                          {user.name}
                        </p>
                        <p className="text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)]">
                          {user.lastname}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Send Invitations Button (only visible before sending) */}
              {!invitationsSent && friendTeam.invited.length > 0 && (
                <button
                  onClick={sendInvitations}
                  className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
                >
                  Send invitationer
                </button>
              )}
            </div>
          </div>

          {/* Friend Team Card (always visible after team creation) */}
          {friendTeam && invitationsSent && (
            <div className="w-[95vw] mx-auto">
              <h2 className="text-main-dark font-title text-subheader-s mb-4">
                Dit vennerhold
              </h2>
              <div className="w-full bg-cover bg-center bg-cardbg3 p-6 relative">
                {/* Team Name Label */}
                <div className="flex justify-center mb-6">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
                    <div className="relative px-4 py-2 bg-white text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] -rotate-[1deg] z-10 flex items-center">
                      {editingTeamName ? (
                        <input
                          type="text"
                          value={teamName}
                          onChange={(e) => setTeamName(e.target.value)}
                          onBlur={handleTeamNameSave}
                          autoFocus
                          className="bg-transparent outline-none w-full"
                        />
                      ) : (
                        <>
                          {friendTeam.name || "Skriv holdnavn her"}
                          <button
                            onClick={handleTeamNameEdit}
                            className="ml-2"
                          >
                            <img src={editIcon} alt="Edit" className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Accepted Members */}
                <h3 className="text-main-dark font-body text-accent mb-4">
                  Godkendt:
                </h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  {friendTeam.members.map(memberId => {
                    const user = memberId === 1337
                      ? { id: 1337, name: "Dig", lastname: "", profileImg: null }
                      : getUserById(memberId) || { id: memberId, name: "Ukendt", lastname: "", profileImg: null };

                    return (
                      <div key={memberId} className="flex flex-col items-center">
                        <img
                          src={getProfileImg(user)}
                          alt={user.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <p className="text-main-dark font-body text-body font-semibold tracking-[var(--text-letter-spacing)]">
                          {user.name}
                        </p>
                        <p className="text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)]">
                          {user.lastname}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Pending Invitations Section (no card background, appears after sending invitations) */}
          {invitationsSent && friendTeam.invited.length > 0 && (
            <div className="w-[95vw] mx-auto">
              <h3 className="text-main-dark font-title text-subheader-s mb-4">
                Afventende invitationer:
              </h3>
              <div className="flex flex-wrap gap-4 mb-6">
                {friendTeam.invited.map(user => (
                  <div key={user.id} className="flex flex-col items-center relative">
                    <button
                      onClick={() => {
                        setUserToRemove(user.id);
                        setIsRemovingFromInvited(true);
                        setShowRemoveConfirmation(true);
                      }}
                      className="absolute -top-2 -right-2 bg-white rounded-full p-1"
                    >
                      <img src={deleteIcon} alt="Remove" className="h-4 w-4" />
                    </button>
                    <img
                      src={getProfileImg(user)}
                      alt={user.name}
                      className="w-16 h-16 rounded-full object-cover"
                      onClick={() => addToMembers(user)}
                    />
                    <p className="text-main-dark font-body text-body font-semibold tracking-[var(--text-letter-spacing)]">
                      {user.name}
                    </p>
                    <p className="text-main-dark font-body text-sm tracking-[var(--text-letter-spacing)]">
                      {user.lastname}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-main-light text-white font-body text-body p-3 rounded-lg mb-6">
                Husk! Alle venner skal acceptere, før I kan ansøge om frivillige roller sammen.
              </div>
            </div>
          )}

          {/* Volunteer Roles Button (only if no pending invitations and more than 1 member) */}
          {invitationsSent && friendTeam.invited.length === 0 && friendTeam.members.length > 1 && (
            <div className="w-[95vw] mx-auto">
              <button
                onClick={() => navigate('/roles')}
                className="w-full px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
              >
                Frivillige roller
              </button>
            </div>
          )}

          {/* Remove Confirmation Popup */}
          {showRemoveConfirmation && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-main-light p-6 rounded-lg max-w-md w-full text-center">
                <p className="text-white font-body text-body mb-6">
                  Er du sikker på, at du vil fjerne invitationen?
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => isRemovingFromInvited ? removeFromInvited(userToRemove) : removeFromMembers(userToRemove)}
                    className="px-6 py-2 bg-main-pink text-main-dark font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
                  >
                    Ja
                  </button>
                  <button
                    onClick={() => setShowRemoveConfirmation(false)}
                    className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
                  >
                    Nej
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}