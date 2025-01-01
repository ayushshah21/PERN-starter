import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Shield, Loader } from "lucide-react";

export default function Dashboard() {
  const [secretData, setSecretData] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.get(
            "http://localhost:4000/api/auth/protected",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setSecretData(res.data.secretData);

          if (res.data.user && res.data.user.email) {
            setUserEmail(res.data.user.email);
          } else {
            console.error("User data is not available in the response");
            handleLogout();
          }
        } catch (err) {
          console.error(err);
          handleLogout();
        } finally {
          setLoading(false);
        }
      } else {
        navigate("/login");
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      // Call logout endpoint to clear session
      await axios.get("http://localhost:4000/api/auth/logout");

      // Clear local storage
      localStorage.removeItem("token");

      // Redirect to login
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      // Still remove token and redirect even if server logout fails
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {userEmail && <Navbar userEmail={userEmail} />}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
        {loading ? (
          <div className="flex items-center justify-center">
            <Loader className="w-8 h-8 text-blue-500 animate-spin" />
          </div>
        ) : secretData ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-700">
                Protected Information
              </h3>
            </div>
            <p className="text-gray-600">{secretData}</p>
          </div>
        ) : (
          <p className="text-red-500">No protected data available.</p>
        )}
      </div>
    </div>
  );
}
