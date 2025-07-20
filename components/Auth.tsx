"use client";
import React, { FormEvent, useState, useEffect } from "react";
import InfoContent from "./InfoContent";

const Auth = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Load isAuthenticated from localStorage on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Save isAuthenticated to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
  }, [isAuthenticated]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password && password === process.env.NEXT_PUBLIC_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen">
      {isAuthenticated ? (
        <InfoContent />
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center p-7 rounded-2xl shadow-lg"
          >
            <h1 className="mb-2 font-bold text-lg text-center">
              Enter Password
            </h1>
            <input
              type="password"
              className="w-full p-2 mb-2 border border-neutral-400 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="mt-1 bg-violet-600 hover:bg-violet-700 font-bold text-white py-2 px-4 rounded-lg cursor-pointer"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Auth;
