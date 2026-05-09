import { useState } from 'react';
import closeHvidIcon from '/closehvid.svg';

// Roles data
const roles = [
  {
    title: "Opbygning",
    duration: "10 timers vagt",
    description: "Timerne kan afholdes over 1 eller 2 vagter inden festivaldagen.\n\nVær med til at skabe rammerne for en uforglemmelig oplevelse, når du hjælper til med opbygning af festivalpladsen, dekorationer og forberedelser.\n\n- Opbygning af boder og møbler\n- Opsætning af hegn og telte\n- Opsætning af scene\n- Dekorering af pladsen\n- Sikkerhed op til festivalen\n\nOpbygning er fra den 15. maj til den 5. juni 2026.",
    shortDescription: "Timerne kan afholdes over 1 eller 2 vagter inden festivaldagen. Vær med til at skabe rammerne for en uforglemmelig oplevelse..."
  },
  {
    title: "Bar",
    duration: "6 timers vagt",
    description: "Timerne skal afholdes på 1 sammenhængende vagt.\n\nVær med til at sikre en god oplevelse for gæster, artister og medfrivillige på festivaldagen – med et smil, overblik og hænder, der er klar til at tage fat, når der er brug for det.\n\n- Billetkontrol\n- Salg og information\n- Sikkerhed\n- Bar\n- Oprydning og rengøring\n\nFestivalen er den 6. juni 2026.",
    shortDescription: "Timerne skal afholdes på 1 sammenhængende vagt. Vær med til at sikre en god oplevelse for gæster, artister..."
  },
  {
    title: "Oprydning",
    duration: "10 timers vagt",
    description: "Timerne kan afholdes over 1 eller 2 vagter efter festivaldagen.\n\nVi ønsker at efterlade Nordre Fælled i god stand, og du kan være med til at sikre, at vi kan skabe en fantastisk festival år efter år.\n\n- Oprydning og rengøring\n- Nedtagning af hegn og telte\n- Nedtagning af boder og møbler\n- Nedtagning af scene\n- Sikkerhed i dagene efter festivalen\n\nNedtagning er fra den 7. juni til den 30. juni 2026.",
    shortDescription: "Timerne kan afholdes over 1 eller 2 vagter efter festivaldagen. Vi ønsker at efterlade Nordre Fælled i god stand..."
  }
];

export default function Roles() {
  const [selectedRole, setSelectedRole] = useState(null);

  // Function to truncate description to two lines
  const truncateDescription = (text) => {
    const lines = text.split('\n\n')[0]; // Get first paragraph
    return lines.length > 100 ? lines.substring(0, 100) + '...' : lines;
  };

  return (
    <div className="min-h-screen bg-main-bgcolor pt-[15vh] p-4 space-y-6">
      <h1 className="text-main-dark font-title text-subheader-l mb-6">
        Vælg en rolle
      </h1>

      {/* Roles Cards */}
      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="bg-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                {/* Title */}
                <h2 className="text-main-dark font-title text-subheader-s mb-2">
                  {role.title}
                </h2>

                {/* Duration */}
                <p className="text-main-light font-body text-accent font-medium mb-2">
                  {role.duration}
                </p>

                {/* Short Description */}
                <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] font-regular line-clamp-2">
                  {role.shortDescription}
                </p>
              </div>

              {/* More Button */}
              <button
                onClick={() => setSelectedRole(role)}
                className="px-4 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Mere
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Role Detail Overlay */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-main-bgcolor w-full max-w-2xl rounded-lg p-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-4 right-4 w-[36px] h-[36px]"
            >
              <img src={closeHvidIcon} alt="Luk" className="w-full h-full" />
            </button>

            {/* Role Details */}
            <div className="pr-8"> {/* Add padding to prevent text from being hidden behind close button */}
              <h2 className="text-main-light font-title text-subheader-s mb-4">
                {selectedRole.title}
              </h2>

              <p className="text-main-light font-body text-accent font-medium mb-4">
                {selectedRole.duration}
              </p>

              {/* Full Description with line breaks */}
              <div className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] font-regular mb-8 whitespace-pre-line">
                {selectedRole.description}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 px-6 py-3 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity">
                  Ansøg alene
                </button>
                <button className="flex-1 px-6 py-3 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity">
                  Ansøg med dit crew
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}