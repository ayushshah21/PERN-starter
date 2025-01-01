import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import { Link, useNavigate } from "react-router-dom";

interface ErrorResponse {
  error: string;
}

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const validateAndRedirect = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get(
            "http://localhost:4000/api/auth/protected",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data.user) {
            navigate("/dashboard");
          } else {
            localStorage.removeItem("token");
          }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
          localStorage.removeItem("token");
        }
      }
    };

    validateAndRedirect();
  }, [navigate]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/auth/register", {
        email,
        password,
      });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      alert(error.response?.data.error || "Error logging in");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Register</h2>

      {/* Google Sign Up */}
      <div className="mb-6">
        <a
          href="http://localhost:4000/api/auth/google"
          className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Sign up with Google
        </a>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          type="submit"
        >
          Register
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Login here
        </Link>
      </p>
    </div>
  );
}
