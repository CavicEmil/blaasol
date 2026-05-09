import lofiProfile from '/lofiprofile.png';
import addIcon from '/addicon.svg';
import loadingIcon from '/loading.svg';
import happyIcon from '/happy.svg';

export default function Profile() {
  return (
    <div className="min-h-screen bg-main-bgcolor p-4 pt-[15vh] space-y-4">
      {/* Profile Header */}
    <div>
      <div className="flex items-start gap-6">
        {/* Profile Picture */}
        <div className="w-[25vw] h-[15vh] flex-shrink-0">
          <img
            src={lofiProfile}
            alt="Profile"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Profile Info */}
        <div>
          <h1 className="text-main-light font-title text-subheader-s">
            Rico Hens Jansen
          </h1>
          <p className="text-main-dark font-body text-body">
            Nickname: The Jansizzler
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-6">
        {/* Left Column (25% width) */}
        <div className="w-[25vw] space-y-4">
          {/* Profile Details Card */}
          <div className="bg-white/10 p-4 rounded-lg space-y-4">
            {[
              { label: "Skills", icon: addIcon },
              { label: "CV", icon: addIcon },
              { label: "Kørekort", icon: addIcon },
              { label: "Yderligere", icon: addIcon }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={item.icon} alt="" className="h-5 w-5" />
                <span className="text-main-dark font-body text-body">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6">
          {/* Contact Info Card */}
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-main-dark font-body text-body">
              <div>
                <p>Tlf.:</p>
                <p>E-mail:</p>
                <p>Adresse:</p>
                <p>Postnr.:</p>
                <p>By:</p>
                <p>Nationalitet:</p>
                <p>Sprog:</p>
                <p>T-Shirt størrelse:</p>
              </div>
              <div>
                {/* Placeholder for actual values */}
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
    </div>
        {/* Applied Tasks Section */}
        <div className="space-y-2">
        <h2 className="text-main-dark font-title text-subheader-s">
            Ansøgt Opgaver
        </h2>

        {/* Bar Task Card */}
        <div className="bg-white/10 outline-1 outline-main-dark p-1 w-[90vw] h-[15vh] flex flex-col  justify-between">
            <div className="flex flex-row items-end justify-between">
            <h3 className="text-main-dark font-title text-subheader-s">
                Bar
            </h3>
            <p className="text-main-light font-body text-accent">
                som crew: ja tak
            </p>
            </div>
            <div className="flex flex-row items-end justify-end gap-8">
            <div className="flex flex-col items-center gap-1">
                <img src={loadingIcon} alt="Loading" className="h-5 w-5" />
                <span className="text-main-light font-body text-accent">i gang</span>
            </div>
            <button className="px-4 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity">
                Fjern ansøgning
            </button>
            </div>
        </div>

        {/* Oprydning Task Card */}
        <div className="bg-white/10 outline-1 outline-main-dark p-1 w-[90vw] h-[15vh] flex flex-col  justify-between">
            <div className="flex flex-row items-end justify-between">
                <h3 className="text-main-dark font-title text-subheader-s">
                    Oprydning
                </h3>
                <p className="text-main-light font-body text-accent">
                    som crew: ja tak
                </p>
            </div>
            <div className="flex flex-row items-end justify-end gap-8">
                <div className="flex flex-col items-center gap-1">
                    <img src={happyIcon} alt="Happy" className="h-6 w-6" />
                    <span className="text-main-light font-body text-accent">Godkendt</span>
                </div>
                <button className="px-4 py-2 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity">
                    Annuller
                </button>
            </div>
        </div>

        {/* Settings Section */}
        <div className="pt-6 space-y-4 text-main-dark font-body text-body">
            <div className="flex justify-between items-center">
            <span>Push Notifikationer:</span>
            <span>on/off</span>
            </div>
            <div className="flex justify-between items-center">
            <span>Sprog:</span>
            <span>DK</span>
            </div>
            <p className="underline cursor-pointer hover:opacity-80 transition-opacity">
            Persondatapolitik {'>'}
            </p>
            <p className="underline cursor-pointer hover:opacity-80 transition-opacity">
            Samtykker {'>'}
            </p>
        </div>
        </div>
    </div>
</div>

  );
}