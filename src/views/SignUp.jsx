import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


export default function SignUp({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    birthDate: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (tab) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (phone) => {
    setFormData(prev => ({
      ...prev,
      phone: phone
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Navn er påkrævet';
    if (!formData.lastName) newErrors.lastName = 'Efternavn er påkrævet';
    if (!formData.email) {
      newErrors.email = 'Email er påkrævet';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ugyldig email';
    }
    if (!formData.password) {
      newErrors.password = 'Adgangskode er påkrævet';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Min. 8 tegn';
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = 'Skal indeholde 1 tal';
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = 'Skal indeholde 1 specialtegn';
    }
    if (!formData.birthDate) newErrors.birthDate = 'Fådselsdag er påkrævet';
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSuccess();
      alert("Velkommen til BLÅ SOL holdet! Vi har lige sendt dig en mail");
      navigate('/dashboard');
    }
  };


  return (
      <div className="bg-main-bgcolor flex flex-col items-center justify-center z-50 p-4 pb-16">
        <div className="bg-light-blue p-4 w-full max-w-md  relative">

          {/* Title */}
          <h2 className="text-main-dark font-title text-subheader-s mb-2">
            Opret ny konto
          </h2>

          {/* Subtitle */}
          <p className="text-main-dark font-body text-subheader-s font-weight-semibold mb-6">
            Velkommen til!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-main-dark font-body text-accent font-medium mb-1">
                Navn
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 bg-white border ${errors.firstName ? 'border-red-500' : 'border-white'} rounded-none text-main-dark font-body text-body`}
                placeholder="Jans"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-main-dark font-body text-accent font-medium mb-1">
                Efternavn
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 bg-white border ${errors.lastName ? 'border-red-500' : 'border-white'} rounded-none text-main-dark font-body text-body`}
                placeholder="Hensen"
              />
              {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-main-dark font-body text-accent font-medium mb-1">
                Telefonnummer
              </label>
              <div className="w-full">
                <PhoneInput
                  defaultCountry='dk'
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full font-body text-main-dark text-body border-white"
                  inputClassName="w-full p-3 bg-white border border-white rounded-none text-main-dark font-body text-body"
                  countrySelectorStyleProps={{ className: "bg-white border-white text-body font-body text-main-dark" }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-main-dark font-body text-accent font-medium mb-1">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-white border ${errors.email ? 'border-red-500' : 'border-white'} rounded-none text-main-dark font-body text-body`}
                placeholder="jans.hensen@domain.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-main-dark font-body text-accent font-medium mb-1">
                Adgangskode
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 bg-white border ${errors.password ? 'border-red-500' : 'border-white'} rounded-none text-main-dark font-body text-body`}
                placeholder="min. 8 tegn, 1 tal og 1 specialtegn"
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Birth Date */}
            <div>
              <label className="block text-main-dark font-body text-accent font-medium mb-1">
                Fødselsdag
              </label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className={`w-full p-3 bg-white border ${errors.birthDate ? 'border-red-500' : 'border-white'} rounded-none text-main-dark font-body text-body`}
              />
              {errors.birthDate && <p className="text-red-500 text-sm mt-1">{errors.birthDate}</p>}
            </div>

            {/* CTA Button */}
            <div className="relative w-full h-[60px] mt-4 translate-y-[5vh]">
              <div className="absolute mx-auto inset-0.5 transform -translate-y-[5px] bg-main-pink transform -rotate-[2deg] w-[85%] "></div>
              <button
                type="submit"
                className="relative mx-auto w-[85%] mx-auto block py-3 bg-main-dark text-white font-body text-accent font-medium -rotate-[1deg] z-10"
              >
                Kom i gang
              </button>
            </div>
          </form>
        </div>
        <div className="pt-24 text-center">
          <p className="text-main-dark font-body text-accent font-medium inline">
            Allerede medlem?
            <Link
              to="/login"
              className="font-semibold hover:opacity-80 transition-opacity"
            >
              {' '}Login
            </Link>
          </p>
        </div>
      </div>
      
    );
}