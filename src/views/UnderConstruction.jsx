import { useNavigate } from 'react-router-dom';

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-main-bgcolor flex flex-col items-center justify-center p-6 space-y-6">
      <p className="text-main-dark font-body text-accent text-center">
        Øv! Denne side er endnu ikke færdig!
      </p>

      <h1 className="text-main-light font-title text-header">
        418
      </h1>

      <button
        onClick={() => navigate(-1)}
        className="px-6 py-2 bg-main-light text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
      >
        Gå tilbage
      </button>
    </div>
  );
}