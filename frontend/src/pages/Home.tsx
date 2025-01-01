import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
      return;
    }

    const existingToken = localStorage.getItem("token");
    if (existingToken) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate, searchParams]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}
