import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import singleIcon from '/single.svg';
import groupIcon from '/group.svg';
import googleIcon from '/google.svg';
import facebookIcon from '/facebook-login.svg';

export default function SignUpForm({ formType, onClose, onSuccess }) {
  const [activeTab, setActiveTab] = useState(formType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Navn er påkrævet';
    if (!formData.email) {
      newErrors.email = 'Email er påkrævet';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ugyldig email';
    }
    if (!formData.password) newErrors.password = 'Adgangskode er påkrævet';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Adgangskoderne stemmer ikke overens';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate successful form submission
      onSuccess();
      // Show welcome popup
      alert("Velkommen til BLÅ SOL holdet! Vi har lige sendt dig en mail");
      // Navigate to landing page
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-main-bgcolor w-full max-w-md rounded-lg shadow-xl overflow-hidden">
        {/* Header with Tabs */}
        <div className="h-[10vh] flex items-center justify-center gap-x-8 border-b border-main-light/20">
          <button
            onClick={() => handleTabChange('single')}
            className={`flex flex-col items-center ${activeTab === 'single' ? 'opacity-100' : 'opacity-50'}`}
          >
            <img src={singleIcon} alt="Single" className="h-8 w-auto" />
          </button>
          <button
            onClick={() => handleTabChange('group')}
            className={`flex flex-col items-center ${activeTab === 'group' ? 'opacity-100' : 'opacity-50'}`}
          >
            <img src={groupIcon} alt="Group" className="h-8 w-auto" />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Navn*"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-none bg-transparent text-white placeholder-gray-400`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-none bg-transparent text-white placeholder-gray-400`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone (Optional) */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Telefon (valgfrit)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-none bg-transparent text-white placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Adgangskode*"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-none bg-transparent text-white placeholder-gray-400`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Bekræft adgangskode*"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-none bg-transparent text-white placeholder-gray-400`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
            >
              Oprette Konto
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-400"></div>
              <span className="px-4 text-gray-400 text-sm">eller</span>
              <div className="flex-1 h-px bg-gray-400"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-x-4">
              <button className="p-2 hover:opacity-80 transition-opacity">
                <img src={googleIcon} alt="Google" className="h-6 w-6" />
              </button>
              <button className="p-2 hover:opacity-80 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}