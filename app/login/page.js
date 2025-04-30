"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formState, setFormState] = useState({ status: null, message: "" });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, show success if email contains "demo"
      if (email.includes("demo")) {
        setFormState({
          status: "success",
          message: "Login successful! Redirecting...",
        });
      } else {
        setFormState({
          status: "error",
          message: "Invalid credentials. Please try again.",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex mt-20">
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
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md">
          {/* Card */}
          <div
            className="relative overflow-hidden rounded-2xl bg-white/80 shadow-xl border
              border-white/20 p-8 transition-all duration-300 hover:shadow-lg"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-6">
              Login
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
                  <CheckCircle className="h-5 w-5 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 mr-2" />
                )}
                <p>{formState.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3
                        text-gray-900 transition-all duration-200 focus:border-primary
                        focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm md:text-base font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-sm md:text-base font-medium text-primary hover:text-primary/80
                        transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={isPasswordVisible ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="block w-full rounded-lg border border-gray-300 bg-white/50 px-4 py-3
                        text-gray-900 transition-all duration-200 focus:border-primary
                        focus:outline-none focus:ring-2 focus:ring-primary/20"
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
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary
                      px-4 py-3 text-white shadow-md transition-all duration-300 hover:shadow-lg
                      hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70
                      hover:cursor-pointer group"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div
                          className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin
                            mr-2"
                        ></div>
                        <span className="text-base md:text-lg">
                          Signing in...
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <span className="text-base md:text-lg">Sign in</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 duration-300" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm md:text-base">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
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
              {` Don't have an account?`}{" "}
              <Link
                href="signup"
                className="font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
