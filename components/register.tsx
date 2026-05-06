'use client';

import { useState, useCallback } from 'react';
import { Check, AlertCircle, Mail, Phone, Building2, Users, FileText, ArrowRight } from 'lucide-react';

interface FormErrors {
  [key: string]: string;
}

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    teamName: '',
    theme: '',
    teamSize: '',
    problemStatement: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const themes = [
    'AI & Machine Learning',
    'Healthcare Innovation',
    'FinTech Solutions',
    'Sustainability',
  ];

  const teamSizes = ['1', '2', '3', '4', '5+'];

  // Validation rules
  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    return /^[0-9\s\-\+\(\)]{10,}$/.test(phone.replace(/\s/g, ''));
  };

  const validateField = useCallback((name: string, value: string): string => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 3) return 'Name must be at least 3 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!validateEmail(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        if (!validatePhone(value)) return 'Please enter a valid phone number';
        return '';
      case 'organization':
        if (!value.trim()) return 'College/Organization is required';
        return '';
      case 'theme':
        if (!value) return 'Please select a theme';
        return '';
      case 'teamSize':
        if (!value) return 'Please select team size';
        return '';
      case 'problemStatement':
        if (!value.trim()) return 'Problem statement is required';
        if (value.trim().length < 20) return 'Problem statement must be at least 20 characters';
        return '';
      default:
        return '';
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => {
        if (error) {
          return { ...prev, [name]: error };
        } else {
          const { [name]: _, ...rest } = prev;
          return rest;
        }
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => {
      if (error) {
        return { ...prev, [name]: error };
      } else {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
    });
  };

  const validateForm = (): boolean => {
    const requiredFields = ['fullName', 'email', 'phone', 'organization', 'theme', 'teamSize', 'problemStatement'];
    const newErrors: FormErrors = {};

    requiredFields.forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        teamName: '',
        theme: '',
        teamSize: '',
        problemStatement: '',
      });
      setErrors({});
      setTouched({});
    }, 4000);
  };

  const getInputClasses = (fieldName: string) => {
    const baseClasses = 'w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-gray-500 focus:outline-none transition-all duration-300';
    const errorState = errors[fieldName];
    if (errorState) {
      return `${baseClasses} border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 animate-shake`;
    }
    return `${baseClasses} border-white/10 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20`;
  };

  return (
    <section
      id="register"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
            Join <span className="gradient-text">InnovateX 2026</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Register now to participate in the innovation challenge and compete with bright minds from around the world.
          </p>
        </div>

        {!submitted ? (
          <div className="glass rounded-2xl border border-white/10 p-8 md:p-12 reveal" style={{ transitionDelay: '200ms' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="reveal" style={{ transitionDelay: '300ms' }}>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Doe"
                  className={getInputClasses('fullName')}
                />
                {errors.fullName && (
                  <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                    <AlertCircle size={16} />
                    {errors.fullName}
                  </div>
                )}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal" style={{ transitionDelay: '400ms' }}>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Mail size={18} className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      className={`pl-10 ${getInputClasses('email')}`}
                    />
                  </div>
                  {errors.email && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                      <AlertCircle size={16} />
                      {errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Phone size={18} className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+1 (555) 000-0000"
                      className={`pl-10 ${getInputClasses('phone')}`}
                    />
                  </div>
                  {errors.phone && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                      <AlertCircle size={16} />
                      {errors.phone}
                    </div>
                  )}
                </div>
              </div>

              {/* Organization and Team Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal" style={{ transitionDelay: '500ms' }}>
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold text-gray-300 mb-2">
                    College/Organization <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Building2 size={18} className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                    <input
                      id="organization"
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Institute/Company"
                      className={`pl-10 ${getInputClasses('organization')}`}
                    />
                  </div>
                  {errors.organization && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                      <AlertCircle size={16} />
                      {errors.organization}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="teamName" className="block text-sm font-semibold text-gray-300 mb-2">
                    Team Name <span className="text-gray-500 text-xs">(Optional)</span>
                  </label>
                  <input
                    id="teamName"
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    placeholder="Your team's creative name"
                    className={getInputClasses('teamName')}
                  />
                </div>
              </div>

              {/* Theme and Team Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal" style={{ transitionDelay: '600ms' }}>
                <div>
                  <label htmlFor="theme" className="block text-sm font-semibold text-gray-300 mb-2">
                    Select Theme <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="theme"
                    name="theme"
                    value={formData.theme}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={getInputClasses('theme')}
                  >
                    <option value="">Choose a theme...</option>
                    {themes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.theme && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                      <AlertCircle size={16} />
                      {errors.theme}
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="teamSize" className="block text-sm font-semibold text-gray-300 mb-2">
                    Team Size <span className="text-red-500">*</span>
                  </label>
                  <div className="relative group">
                    <Users size={18} className="absolute left-3 top-3.5 text-gray-500 pointer-events-none group-focus-within:text-cyan-400 transition-colors" />
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`pl-10 ${getInputClasses('teamSize')}`}
                    >
                      <option value="">Select team size...</option>
                      {teamSizes.map((size) => (
                        <option key={size} value={size}>{size} member{size !== '1' ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  {errors.teamSize && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                      <AlertCircle size={16} />
                      {errors.teamSize}
                    </div>
                  )}
                </div>
              </div>

              {/* Problem Statement */}
              <div className="reveal" style={{ transitionDelay: '700ms' }}>
                <label htmlFor="problemStatement" className="block text-sm font-semibold text-gray-300 mb-2">
                  Problem Statement <span className="text-red-500">*</span>
                  <span className="text-gray-500 text-xs ml-2">(Minimum 20 characters)</span>
                </label>
                <div className="relative group">
                  <FileText size={18} className="absolute left-3 top-3.5 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                  <textarea
                    id="problemStatement"
                    name="problemStatement"
                    value={formData.problemStatement}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Describe the problem you want to solve..."
                    rows={4}
                    className={`pl-10 resize-none ${getInputClasses('problemStatement')}`}
                  />
                </div>
                <div className="flex justify-between items-end mt-2">
                  <div>
                    {errors.problemStatement && (
                      <div className="flex items-center gap-2 text-red-500 text-sm animate-in fade-in slide-in-from-top-1">
                        <AlertCircle size={16} />
                        {errors.problemStatement}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {formData.problemStatement.length} characters
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg btn-hover btn-glow-primary disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Registration</span>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="glass rounded-2xl border border-white/10 p-12 text-center reveal animate-in zoom-in duration-500">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center animate-bounce">
                <Check className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">Registration Successful!</h3>
            <p className="text-gray-400 text-lg mb-2">
              Thank you for registering for InnovateX 2026.
            </p>
            <p className="text-gray-500">
              Check your email ({formData.email}) for confirmation details and further instructions. Get ready to innovate!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
