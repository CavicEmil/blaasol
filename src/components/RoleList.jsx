import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import cardBg3 from '/cardbg3.svg';

// Dummy roles data (same as in Roles page)
const allRoles = [
  {
    roleTitle: "Renovering",
    roleDescription: "Vil du med til at skabe en grøn og gnistrende festivalplads sammen? Som frivillig i Renovering er du en del af holdet, der gør BLÅ SOL skinnende – for gæster, artister og medfrivillige.",
    availability: 10,
    ageRequirement: "16+",
    roleInsight: [
      { title: "Fleksible vagter", description: "10 timers vagt afholdes på festivaldagen, eller 10 timer fordelt før og efter" },
      { title: "Ingen erfaring nødvendig", description: "Kun lysten til at arbejde sammen og hjælpe med at gøre BLÅ SOL skinnende" }
    ],
    tasks: [
      "Crowd management",
      "Billetkontrol",
      "Hegnsvagt",
      "Brandvagt",
      "Parkering og natvagt"
    ],
    shiftDuration: 10,
    shiftTime: "Før/Efter"
  },
  {
    roleTitle: "Bar",
    roleDescription: "Udrustet med et smil og friske drikkevarer vil du sikre, at vores gæster aldrig er tørstige. Du vil være en del af et hold, hvor vi sætter pris på samarbejde og hvor vi holder humøret oppe, selv når det går stærkt.",
    availability: 35,
    ageRequirement: "18+",
    roleInsight: [
      { title: "Faste vagter", description: "Kun 6 timers vagt på festivaldagen" },
      { title: "Ingen erfaring nødvendig", description: "Kun lysten til at arbejde sammen og hjælpe med at gøre BLÅ SOL skinnende" }
    ],
    tasks: [
      "Hjælpe med at sikre en god oplevelse for gæster, artister og medfrivillige",
      "Sikre at vores gæster aldrig er tørstige",
      "Sikre at baren er ren og pæn, og at kopper, drikkevarer mv. altid er fyldt op"
    ],
    shiftDuration: 6,
    shiftTime: "Under"
  },
  // Add more roles as needed
  {
    roleTitle: "Oprydning",
    roleDescription: "Hjælp os med at gøre festivalpladsen ren og klar til næste år. Som frivillig i Oprydning er du med til at sikre, at BLÅ SOL efterlader et godt indtryk.",
    availability: 15,
    ageRequirement: "16+",
    roleInsight: [
      { title: "Fleksible vagter", description: "10 timers vagt fordelt før og efter festivalen" }
    ],
    tasks: [
      "Rengøring af festivalpladsen",
      "Nedtagning af telte og boder",
      "Sortering af affald"
    ],
    shiftDuration: 10,
    shiftTime: "Før/Efter"
  },
  {
    roleTitle: "Info",
    roleDescription: "Som frivillig i Info er du ansigtet udadtil. Du vil hjælpe gæster med spørgsmål, vejvisning og generel information om festivalen.",
    availability: 20,
    ageRequirement: "18+",
    roleInsight: [
      { title: "Faste vagter", description: "6 timers vagt på festivaldagen" }
    ],
    tasks: [
      "Vejvisning",
      "Besvare spørgsmål",
      "Uddeling af programmer"
    ],
    shiftDuration: 6,
    shiftTime: "Under"
  }
];

export default function RolesList() {
  const { shiftType } = useParams();
  console.log('shiftType is', shiftType);
  console.log('useParams is', useParams());
  const navigate = useNavigate();
  const [filteredRoles, setFilteredRoles] = useState([]);

  useEffect(() => {
    // Filter roles based on shiftType
    if (shiftType === '10h') {
      setFilteredRoles(allRoles.filter(role => role.shiftTime === "Før/Efter"));
    } else if (shiftType === '6h') {
      setFilteredRoles(allRoles.filter(role => role.shiftTime === "Under"));
    }
  }, [shiftType]);

  const handleRoleSelect = (role) => {
    // Navigate to RoleDetail with the selected role
    navigate(`/roles/${shiftType}/details`, { state: { role } });
  };

  return (
    <div className="min-h-screen bg-main-bgcolor p-4">
      <div className="w-[95vw] mx-auto space-y-6">
        <h1 className="text-main-dark font-title text-subheader-l mb-6">
          {shiftType === '10h' ? '10 timers vagter' : '6 timers vagter'}
        </h1>

        {filteredRoles.map((role, index) => (
          <div
            key={index}
            className="w-[90vw] mx-auto h-[30vh] bg-cover bg-center bg-cardbg3 relative p-6"
          >
            {/* Age Requirement Label */}
            <div className="absolute top-0 right-0">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-primary-dark transform rotate-[2deg] rounded-lg"></div>
                <div className="relative px-3 py-1 shadow-label bg-main-pink text-white font-bold font-body text-sm tracking-[var(--text-letter-spacing)] rotate-[20deg] z-10">
                  {role.ageRequirement}
                </div>
              </div>
            </div>

            {/* Role Content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-main-dark font-title text-subheader-s mb-2">
                  {role.roleTitle}
                </h2>
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
                  {role.roleDescription}
                </p>
              </div>
              <div className="relative w-full flex justify-start h-[60px]">
                <div className="absolute mx-auto inset-0.5 transform -translate-y-[5px] bg-main-pink w-[85%] h-[60px] -rotate-[2deg]"></div>
                <button
                  onClick={() => handleRoleSelect(role)}
                  className="relative mx-auto w-[85%] text-center block py-3 bg-main-dark text-white font-body text-accent font-medium -rotate-[1deg] z-10"
                >
                  Søg
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}