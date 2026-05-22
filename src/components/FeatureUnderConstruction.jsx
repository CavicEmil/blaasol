import deleteIcon from '/delete.svg';

export default function FeatureUnderConstruction({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[60px] left-0 right-0 z-50">
      <div className="bg-main-bgcolor p-4 border-b border-main-dark/20 shadow-md">
        <div className="flex items-center justify-between max-w-[95vw] mx-auto">
          {/* Content */}
          <p className="text-main-dark font-body text-accent m-0">
            Øv, denne funktion er endnu ikke færdigudviklet
          </p>

          {/* Close button */}
          <button onClick={onClose} className="flex-shrink-0 ml-4">
            <img src={deleteIcon} alt="Close" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
