import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent! Please check your email inbox.");
    } catch (err) {
      console.error(err);
      setError(
        "Failed to send reset email. Please check your email and try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Forgot Password
        </h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="border p-2 w-full mb-4 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 cursor-pointer text-white p-2 rounded-md hover:bg-green-700 transition"
        >
          Send Reset Link
        </button>
        {message && <p className="mt-4 text-center text-blue-600">{message}</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
