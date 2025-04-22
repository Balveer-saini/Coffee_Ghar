import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Coffee, UserPlus, User, Lock, Mail, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import FacialRecognition from '../components/FacialRecognition';
import { motion } from 'framer-motion';

const SignUp = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    mood: ''
  });
  const [error, setError] = useState('');
  const [step, setStep] = useState(1);
  const [age, setAge] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');

    // Calculate age if date of birth changes
    if (name === 'dateOfBirth' && value) {
      const birthDate = new Date(value);
      const today = new Date();
      let calculatedAge = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
      }
      
      setAge(calculatedAge);
    }
  };

  const handleMoodDetected = (mood: string) => {
    setFormData(prev => ({ ...prev, mood }));
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
          setError('Please fill in all fields');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return false;
        }
        if (formData.password.length < 6) {
          setError('Password must be at least 6 characters long');
          return false;
        }
        break;
      case 2:
        if (!formData.dateOfBirth) {
          setError('Please select your date of birth');
          return false;
        }
        if (age !== null && age < 18) {
          setError('You must be 18 or older to register');
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
      setError('');
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsLoading(true);
    try {
      await register(formData);
      navigate('/profile');
    } catch (error) {
      setError(error.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="bg-amber-700 py-6 px-8 text-center">
              <div className="flex justify-center mb-2">
                <Coffee size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Create Your Account</h2>
              <p className="text-amber-100">Join Zodiac Brew and discover your perfect coffee match</p>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <div className="flex items-center">
                  <div className={`flex-1 border-t-2 ${step >= 1 ? 'border-amber-500' : 'border-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${step >= 1 ? 'bg-amber-500' : 'bg-gray-300'}`}>1</div>
                  <div className={`flex-1 border-t-2 ${step >= 2 ? 'border-amber-500' : 'border-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${step >= 2 ? 'bg-amber-500' : 'bg-gray-300'}`}>2</div>
                  <div className={`flex-1 border-t-2 ${step >= 3 ? 'border-amber-500' : 'border-gray-200'}`}></div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${step >= 3 ? 'bg-amber-500' : 'bg-gray-300'}`}>3</div>
                  <div className={`flex-1 border-t-2 ${step >= 3 ? 'border-amber-500' : 'border-gray-200'}`}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <div className={`text-center ${step >= 1 ? 'text-amber-700 font-medium' : 'text-gray-500'}`}>Personal Info</div>
                  <div className={`text-center ${step >= 2 ? 'text-amber-700 font-medium' : 'text-gray-500'}`}>Birth Details</div>
                  <div className={`text-center ${step >= 3 ? 'text-amber-700 font-medium' : 'text-gray-500'}`}>Mood Analysis</div>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div>
                    <div className="mb-6">
                      <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          placeholder="••••••••"
                          required
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full px-4 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
                    >
                      Next Step
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="mb-6">
                      <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium mb-2">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={18} className="text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="w-full pl-10 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                          required
                        />
                      </div>
                    </div>

                    {age !== null && (
                      <div className="mb-6 p-4 bg-amber-50 rounded-md">
                        <p className="text-amber-800">
                          <span className="font-medium">Your Age:</span> {age} years
                        </p>
                      </div>
                    )}

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 px-4 py-3 border border-amber-700 text-amber-700 rounded-md hover:bg-amber-50 transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-1/2 px-4 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-700 mb-4">Facial Mood Recognition</h3>
                      <p className="text-gray-600 mb-4">
                        We'll analyze your current mood to provide better coffee recommendations.
                        Please allow camera access and take a photo.
                      </p>
                      
                      <FacialRecognition onMoodDetected={handleMoodDetected} />
                      
                      {formData.mood && (
                        <div className="mt-4 p-4 bg-amber-50 rounded-md">
                          <p className="text-amber-800">
                            <span className="font-medium">Detected Mood:</span> {formData.mood}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="w-1/2 px-4 py-3 border border-amber-700 text-amber-700 rounded-md hover:bg-amber-50 transition-colors"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-1/2 px-4 py-3 bg-amber-700 text-white rounded-md hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Creating Account...</span>
                          </>
                        ) : (
                          <>
                            <UserPlus size={18} />
                            <span>Create Account</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link to="/login" className="font-medium text-amber-700 hover:text-amber-800">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;