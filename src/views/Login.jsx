import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import emailIcon from '/email.svg';
import eyeIcon from '/eye.svg';
import passwordIcon from '/password.svg';
import googleIcon from '/google.svg';
import facebookIcon from '/facebook-login.svg';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
    navigate('/dashboard');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-main-bgcolor flex flex-col items-center justify-center p-4">
      <div className="bg-light-blue p-8 w-full max-w-md ">
        {/* Title */}
        <h1 className="text-main-dark font-title text-subheader-s mb-2">
          Log ind
        </h1>

        {/* Subtitle */}
        <p className="text-main-dark font-body text-subheader-s mb-2">
          Velkommen til!
        </p>

        {/* Description */}
        <p className="text-main-dark font-body text-accent mb-8">
          Log venligst ind for at fortsætte
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label className="block text-main-dark font-body text-accent font-medium mb-1">
              E-Mail
            </label>
            <div className="relative">
              <img
                src={emailIcon}
                alt="Email"
                className="absolute left-0 top-0 h-full w-[40px] bg-white p-2"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-[40px] p-3 bg-white rounded-none text-main-dark font-body text-body"
                placeholder="Hens.Jansen@domain.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-main-dark font-body text-accent font-medium mb-1">
              Adgangskode
            </label>
            <div className="relative flex">
              <img
                src={passwordIcon}
                alt="Password"
                className="absolute left-0 top-0 h-full w-[40px] bg-white p-2"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-[40px] p-3 bg-white  rounded-none text-main-dark font-body text-body"
                placeholder="Dit adgangskode"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 h-full w-[40px] bg-white p-2 flex items-center justify-center"
              >
                <img
                  src={eyeIcon}
                  alt={showPassword ? "Hide password" : "Show password"}
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between text-main-dark font-body text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 accent-main-dark"
              />
              Husk mig
            </label>
            <button
              type="button"
              className="hover:opacity-80 transition-opacity"
            >
              Glemt adgangskode?
            </button>
          </div>

          {/* CTA Button */}
          <div className="relative w-full h-[60px] mt-4 translate-y-[7vh]">
            <div className="absolute w-[100%] mx-auto inset-0 transform -translate-y-[5px] bg-main-pink rotate-[1deg]"></div>
            <button
              type="submit"
              className="relative mx-auto w-[98%] block py-3 bg-main-dark text-white font-body text-accent font-medium rotate-[2deg] z-10"
            >
              Log ind
            </button>
          </div>
        </form>
      </div>

       {/* Separator with "eller" */}
        <div className="flex items-center my-12 pt-6">
          <div className="flex-1 h-px bg-main-dark/30"></div>
          <span className="px-4 text-main-dark font-body text-accent">eller</span>
          <div className="flex-1 h-px bg-main-dark/30"></div>
        </div>

        {/* Social Login */}
        <div className="text-center mb-6">
          <p className="text-main-dark font-body text-accent mb-4">
            Log ind med
          </p>
          <div className="flex justify-center gap-4">
            <button className="p-2 hover:opacity-80 transition-opacity">
              <img src={facebookIcon} alt="Facebook" className="h-auto w-12" />
            </button>
            <button className="p-2 hover:opacity-80 transition-opacity">
              <img src={googleIcon} alt="Google" className="h-auto w-12" />
            </button>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="text-center pb-16">
          <p className="text-main-dark font-body text-accent">
            Har du ikke en konto?{' '}
            <Link
              to="/signup"
              className="font-semibold hover:opacity-80 transition-opacity"
            >
              Opret konto
            </Link>
          </p>
        </div>
      </div>
  );
}