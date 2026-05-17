import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/users/login",
        formData
      );

      alert(response.data.message);

      localStorage.setItem(
        "token",
        response.data.token
      );

      navigate("/");

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (
  <div className="min-h-screen flex flex-col bg-gray-100">

    {/* Navbar at top */}
    <Navbar />

    {/* Main content takes remaining space */}
    <div className="flex flex-1 items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-3 rounded mb-4"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have account?
          <Link to="/register" className="text-blue-600 ml-2">
            Register
          </Link>
        </p>
      </form>

    </div>

    {/* Footer at bottom */}
    <Footer />

  </div>
);
}

export default Login;