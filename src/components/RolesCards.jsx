import { useState } from 'react';
import { Link } from 'react-router-dom';
import cardBg3 from '/cardbg3.svg';

// Dummy roles data
const openRoles = [
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
    roleDescription: "Udrustet med et smil og friske drikkevarer vil du sikre, at vores gæster aldrig er tørstige. Du vil være en del af et hold, hvor vi sætter pris på samarbejde og hvor vi holder humøret oppe, selv når det går stærkt. Du vil også sikre, at baren er ren og pæn, og at kopper, drikkevarer mv. altid er fyldt op.",
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
  }
];

export default function RolesCards() {
  // Group roles by shift duration
  const tenHourRoles = openRoles.filter(role => role.shiftDuration === 10);
  const sixHourRoles = openRoles.filter(role => role.shiftDuration === 6);

  return (
    <div className="min-h-screen py-6 bg-main-bgcolor">
      {/* 10 Hour Shift Roles Card */}
      <div className="w-[90vw] mx-auto mb-16">
        <div
          className="w-[90vw] mx-auto h-[30vh] bg-cover bg-center bg-cardbg3 relative p-4"
        >
          {/* Help Needed Label */}
          <div className="absolute top-0 right-0">
            <div className="relative inline-block">
              <div className="relative px-3 py-1 shadow-label bg-main-pink text-white font-bold font-body text-sm tracking-[var(--text-letter-spacing)] rotate-[20deg] z-10">
                HJÆLP SØGES
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-main-dark font-title text-subheader-s mb-2">
                10 timers vagter
              </h2>
              <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-4">
                10 timer fordelt på to vagter før og/eller efter festivaldagen
              </p>
            </div>
            <div className="relative w-full h-[60px] mt-4 translate-y-[5vh]">
              <div className="absolute mx-auto inset-0.5 transform -translate-y-[5px] bg-main-pink transform -rotate-[2deg] w-[85%] "></div>
              <Link
                to="10h" 
                className="relative mx-auto w-[85%] text-center mx-auto block py-3 bg-main-dark text-white font-body text-accent font-medium -rotate-[1deg] z-10"
              >
                Udforsk roller
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Hour Shift Roles Card */}
      <div className="w-[90vw] mx-auto mb-6">
        <div
          className="w-[90vw] mx-auto h-[30vh] bg-cover bg-center bg-cardbg3 relative p-6"
        >
          {/* Help Needed Label */}
          <div className="absolute top-0 right-0">
            <div className="relative inline-block">
              <div className="relative px-3 py-1 shadow-label bg-main-pink text-white font-bold font-body text-sm tracking-[var(--text-letter-spacing)] rotate-[20deg] z-10">                HJÆLP SØGES
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between h-full pt-16">
            <div>
              <h2 className="text-main-dark font-title text-subheader-s mb-2">
                6 timers vagter
              </h2>
              <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mb-4">
                6 timers sammenhængende vagt på festivaldagen
              </p>
            </div>
            <div className="relative w-full h-[60px] mt-4 translate-y-[5vh]">
              <div className="absolute mx-auto inset-0.5 transform -translate-y-[5px] bg-main-pink transform -rotate-[2deg] w-[85%] "></div>
              <Link
                to="6h" 
                className="relative mx-auto w-[85%] text-center mx-auto block py-3 bg-main-dark text-white font-body text-accent font-medium -rotate-[1deg] z-10"
              >
                Udforsk roller
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptive Text */}
      <div className="w-[95vw] mx-auto p-4">
        <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)]">
          Afhængigt af hvilket hold du bliver en del af, kan du derfor have vagter før, under eller efter festivaldagen.
        </p>
        <p className="text-main-dark font-body text-body tracking-[var(--text-letter-spacing)] mt-2">
          Nogle hjælper med at bygge festivalen op fra bunden, andre står klar bag entrancen på dagen, mens resten hjælper med at pakke ned og afrunde en fantastisk oplevelse.
        </p>
      </div>
    </div>
  );
}