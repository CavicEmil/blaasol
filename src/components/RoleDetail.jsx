import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import cardBg3 from '/cardbg3.svg';
import checkmarkIcon from '/checkmark.svg';

export default function RoleDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const role = state?.role;
  const [showPopup, setShowPopup] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isTeamApplication, setIsTeamApplication] = useState(false);

  if (!role) {
    return (
      <div className="min-h-screen bg-main-bgcolor p-4">
        <p className="text-main-dark font-body text-body">No role data available</p>
      </div>
    );
  }

  const handleApplySolo = () => {
    setIsTeamApplication(false);
    setShowSuccess(true);
  };

  const handleApplyTeam = () => {
    setIsTeamApplication(true);
    setShowSuccess(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-main-bgcolor p-4 space-y-6">
      {/* Shift Type and Age Requirement Labels */}
      <div className="flex gap-4 mb-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
          <div className="relative px-4 py-2 bg-white text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] -rotate-[1deg] z-10">
            Vagt type: {role.shiftTime === "Før/Efter" ? "Før/Efter festivalen" : "Under festivalen"}
          </div>
        </div>
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
          <div className="relative px-4 py-2 bg-white text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] -rotate-[1deg] z-10">
            Aldersgrænse: {role.ageRequirement}
          </div>
        </div>
      </div>

      {/* Role Title and Availability */}
      <div className="space-y-2">
        <h1 className="text-main-dark font-title text-subheader-l">
          Rolle: {role.roleTitle}
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
            Ledige pladser: {role.availability}
          </p>
          {role.availability > 0 && (
            <img src={checkmarkIcon} alt="Available" className="h-5 w-5" />
          )}
        </div>
      </div>

      {/* Role Description */}
      <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
        {role.roleDescription}
      </p>

      {/* Role Insight Section */}
      <div className="w-full bg-cover bg-center bg-cardbg3 p-6 relative">
        <h2 className="text-main-dark font-body text-accent mb-4">
          Rolleindsigt:
        </h2>
        <div className="flex gap-4">
          {role.roleInsight.map((insight, index) => (
            <div key={index} className="w-[50vw]">
              <div className="flex items-start gap-2 mb-2">
                <img src={checkmarkIcon} alt="Check" className="h-5 w-5 flex-shrink-0 mt-1" />
                <h3 className="text-main-dark font-body text-body font-semibold tracking-[var(--text-letter-spacing)]">
                  {insight.title}
                </h3>
              </div>
              <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
                {insight.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tasks Section */}
      <div className="w-full bg-cover bg-center bg-cardbg3 p-6 relative">
        <h2 className="text-main-dark font-body text-accent mb-4">
          Opgaver:
        </h2>
        <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-4">
          Du kan arbejde med:
        </p>
        <ul className="space-y-2 text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
          {role.tasks.map((task, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1">•</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Application Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowPopup(true)}
          className="w-[50vw] px-6 py-3 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
        >
          Ansøg
        </button>
      </div>

      {/* Application Options Popup */}
      {showPopup && !showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-light-blue p-6 rounded-lg max-w-md w-full">
            <h2 className="text-main-dark font-title text-subheader-s mb-4">
              Vælg hvordan du vil ansøge
            </h2>

            <div className="space-y-4">
              <div>
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-2">
                  Som enkelt medlem bliver du automatisk tildelt en rolle baseret på nuværende efterspørgsel
                </p>
                <button
                  onClick={handleApplySolo}
                  className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
                >
                  Ansøg som enkelt medlem
                </button>
              </div>

              <div>
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-2">
                  Dit hele hold bliver planlagt til samme vagt
                </p>
                <button
                  onClick={handleApplyTeam}
                  className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
                >
                  Ansøg som hold med dine venner
                </button>
              </div>
            </div>

            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 w-[36px] h-[36px] p-1"
            >
              <span className="text-main-dark font-body text-body">×</span>
            </button>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-light-blue p-6 rounded-lg max-w-md w-full text-center">
            <h2 className="text-main-dark font-title text-subheader-s mb-4">
              {isTeamApplication ? "Din holdansøgning er sendt!" : "Din ansøgning er sendt!"}
            </h2>

            <button
              onClick={handleClosePopup}
              className="px-6 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
            >
              Luk
            </button>
          </div>
        </div>
      )}
    </div>
  );
}