import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleIcon from '/google.svg';
import facebookIcon from '/facebook-login.svg';

export default function Auth() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just navigate to Dashboard regardless of input
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-main-bgcolor">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-white/50 rounded-none text-white placeholder-white/70 focus:outline-none focus:border-main-light"
            />
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Adgangskode"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 bg-transparent border border-white/50 rounded-none text-white placeholder-white/70 focus:outline-none focus:border-main-light"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-main-dark text-white font-body text-accent font-medium rounded-none hover:opacity-90 transition-opacity"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center">
            <div className="flex-1 h-px bg-white/50"></div>
            <span className="px-4 text-white/70 text-sm">eller</span>
            <div className="flex-1 h-px bg-white/50"></div>
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
  );
}