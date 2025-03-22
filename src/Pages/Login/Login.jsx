"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFirebaseAuth from "../../hooks/useFirebase";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const {
    signInWithGoogle,
    signInWithFacebook,
    signInWithGitHub,
    signInWithEmailAndPassword,
    signUpWithEmailAndPassword,
  } = useFirebaseAuth();
  const navigate = useNavigate();

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        await signUpWithEmailAndPassword(email, password);
      } else {
        await signInWithEmailAndPassword(email, password);
      }
      navigate("/");
    } catch (error) {
      console.error("Email authentication error:", error);
    }
  };

  const handleSocialAuth = async (provider) => {
    try {
      if (provider === "google") {
        await signInWithGoogle();
      } else if (provider === "facebook") {
        await signInWithFacebook();
      } else if (provider === "github") {
        await signInWithGitHub();
      }
      navigate("/");
    } catch (error) {
      console.error("Social authentication error:", error);
    }
  };

  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-card rounded-xl shadow-lg p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-teal-light">
            {isSignUp ? "Create Your Account" : "Sign In to Your Account"}
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            {isSignUp ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              className="font-medium text-teal hover:text-teal-light transition-colors"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </div>

        {/* Email/Password Form */}
        <form className="space-y-4" onSubmit={handleEmailAuth}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-foreground mb-1">
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 bg-input text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal text-sm placeholder-muted-foreground"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 bg-input text-foreground border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal text-sm placeholder-muted-foreground"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal text-foreground font-semibold rounded-md hover:bg-teal-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal transition-all duration-300"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => handleSocialAuth("google")}
            className="flex items-center justify-center py-2 px-3 bg-input text-foreground border border-border rounded-md hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300"
          >
            <FaGoogle className="mr-2" /> Google
          </button>
          <button
            onClick={() => handleSocialAuth("facebook")}
            className="flex items-center justify-center py-2 px-3 bg-input text-foreground border border-border rounded-md hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300"
          >
            <FaFacebook className="mr-2" /> Facebook
          </button>
          <button
            onClick={() => handleSocialAuth("github")}
            className="flex items-center justify-center py-2 px-3 bg-input text-foreground border border-border rounded-md hover:bg-teal-dark focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300"
          >
            <FaGithub className="mr-2" /> GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;