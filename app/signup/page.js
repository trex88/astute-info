"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export default function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [pass, setPass] = useState(0);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({ status: null, message: "" });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (passStrength <= 1) {
      newErrors.password = "Password too weak";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!acceptTerms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormState({
        status: "success",
        message: "Account created successfully! Redirecting to verification...",
      });
    }, 1500);
  };

  // Password strength indicator
  const getPasswordStrength = (password) => {
    if (!password) return { strength: 0, label: "" };

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const labels = ["", "Weak", "Fair", "Good", "Strong"];
    const colors = [
      "",
      "bg-red-500",
      "bg-orange-500",
      "bg-yellow-500",
      "bg-green-500",
    ];
    const textColors = [
      "",
      "text-red-500",
      "text-orange-500",
      "text-yellow-500",
      "text-green-500",
    ];

    return {
      strength,
      label: labels[strength],
      color: colors[strength],
      textColor: textColors[strength],
    };
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 3D Grid Background */}
      <div
        className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 to-slate-100
          dark:from-slate-900 dark:to-slate-800"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 perspective-[1000px] opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] w-full bg-primary/20"
                style={{ top: `${i * 5}vh` }}
              ></div>
            ))}
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-[1px] bg-primary/20"
                style={{ left: `${i * 5}vw` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl shadow-xl
              border border-white/20 p-8 transition-all duration-300 hover:shadow-lg"
          >
            <div
              className="absolute -top-24 -right-24 h-40 w-40 rounded-full bg-gradient-to-br
                from-primary/30 to-secondary/30 blur-2xl"
            ></div>
            <div
              className="absolute -bottom-24 -left-24 h-40 w-40 rounded-full bg-gradient-to-br
                from-secondary/30 to-accent/30 blur-2xl"
            ></div>

            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
              Create Your Account
            </h2>

            {formState.status && (
              <div
                className={`mb-6 p-3 rounded-lg flex items-center ${
                formState.status === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {formState.status === "success" ? (
                  <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                )}
                <p>{formState.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                {/* Full Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm md:text-base font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.fullName ? "border-red-300" : "border-gray-300" } bg-white/50 px-4 py-3
                        text-gray-900 transition-all duration-200 focus:border-primary
                        focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                    {errors.fullName && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.fullName && (
                    <p className="text-sm md:text-base text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm md:text-base font-medium text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.email ? "border-red-300" : "border-gray-300" } bg-white/50 px-4 py-3
                        text-gray-900 transition-all duration-200 focus:border-primary
                        focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                    {errors.email && (
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
                        <AlertCircle className="h-5 w-5" />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <p className="text-sm md:text-base text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="password"
                    className="block text-sm md:text-base font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.password ? "border-red-300" : "border-gray-300" } bg-white/50 px-4 py-3
                        text-gray-900 transition-all duration-200 focus:border-primary
                        focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700
                        hover:cursor-pointer"
                    >
                      {isPasswordVisible ? (
                        <Eye className="h-5 w-5" />
                      ) : (
                        <EyeOff className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-sm md:text-base text-red-600">
                      {errors.password}
                    </p>
                  )}

                  {/* Password strength indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs md:text-sm text-gray-500">
                          Password strength:
                        </div>
                        <div
                          className={`text-xs md:text-sm font-medium ${passwordStrength.textColor}`}
                        >
                          {passwordStrength.label}
                        </div>
                      </div>
                      {/* Password strength bar */}
                      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${passwordStrength.color}`}
                          style={{
                            width: `${(passwordStrength.strength / 4) * 100}%`,
                          }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="flex items-center text-xs md:text-sm text-gray-500">
                          <div
                            className={`mr-1 w-3 h-3 rounded-full
                            ${/[A-Z]/.test(formData.password) ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          Uppercase letter
                        </div>
                        <div className="flex items-center text-xs md:text-sm text-gray-500">
                          <div
                            className={`mr-1 w-3 h-3 rounded-full
                            ${/[0-9]/.test(formData.password) ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          Number
                        </div>
                        <div className="flex items-center text-xs md:text-sm text-gray-500">
                          <div
                            className={`mr-1 w-3 h-3 rounded-full
                            ${formData.password.length >= 8 ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          8+ characters
                        </div>
                        <div className="flex items-center text-xs md:text-sm text-gray-500">
                          <div
                            className={`mr-1 w-3 h-3 rounded-full
                            ${/[^A-Za-z0-9]/.test(formData.password) ? "bg-green-500" : "bg-gray-300"}`}
                          ></div>
                          Special character
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm md:text-base font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={isConfirmPasswordVisible ? "text" : "password"}
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border ${
                        errors.confirmPassword
                          ? "border-red-300"
                          : "border-gray-300"
                        } bg-white/50 px-4 py-3 text-gray-900 transition-all duration-200
                        focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700
                        hover:cursor-pointer"
                    >
                      {isConfirmPasswordVisible ? (
                        <Eye className="h-5 w-5" />
                      ) : (
                        <EyeOff className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm md:text-base text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        name="terms"
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={() => setAcceptTerms(!acceptTerms)}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary
                          hover:cursor-pointer"
                      />
                    </div>
                    <div className="ml-3 text-sm md:text-base">
                      <label htmlFor="terms" className="text-gray-700">
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </div>
                  {errors.terms && (
                    <p className="text-sm md:text-base text-red-600">
                      {errors.terms}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary
                    px-4 py-3 text-white shadow-md transition-all duration-300 hover:shadow-lg
                    hover:translate-y-[-2px] active:translate-y-[0px] disabled:opacity-70
                    hover:cursor-pointer group"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div
                        className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin
                          mr-2"
                      ></div>
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <span>Create Account</span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 duration-300" />
                    </div>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm md:text-base">
                  <span className="bg-white px-2 text-base md:text-lg text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-300
                    bg-white px-4 py-2.5 text-gray-700 shadow-sm hover:bg-gray-50 transition-all
                    duration-200 hover:cursor-pointer"
                >
                  <FaFacebook className="size-5 md:size-6" />
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-lg border border-gray-300
                    bg-white px-4 py-2.5 text-gray-700 shadow-sm hover:bg-gray-50 transition-all
                    duration-200 hover:cursor-pointer"
                >
                  <FaGoogle className="size-5 md:size-6" />
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-sm md:text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="login"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
