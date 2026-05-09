import { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import singleIcon from '/single.svg';
import groupIcon from '/group.svg';

export default function SignUp() {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState(null); // 'single' or 'group'

  const openForm = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-[30vh]">
      {/* Icon Selection */}
      <div className="flex flex-col items-center justify-center w-full gap-x-[20%]">
        {/* Single Icon */}
        <button
          onClick={() => openForm('single')}
          className="h-[15vh] flex flex-col items-center"
        >
          <img
            src={singleIcon}
            alt="Single Sign Up"
            className="h-full w-auto"
          />
        </button>

        {/* Divider Line */}
        <div className="w-[80vw] h-px bg-main-light"></div>

        {/* Group Icon */}
        <button
          onClick={() => openForm('group')}
          className="h-[15vh] flex flex-col items-center"
        >
          <img
            src={groupIcon}
            alt="Group Sign Up"
            className="h-full w-auto"
          />
        </button>
      </div>

      {/* SignUp Form Overlay */}
      {showForm && (
        <SignUpForm
          formType={formType}
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            setShowForm(false);
            // Show welcome popup (we'll implement this next)
          }}
        />
      )}
    </div>
  );
}