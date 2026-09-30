import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import AuthSidebar from "../components/layout/AuthSideBar.jsx";
import useTitle from "../hooks/useTitle.js"

function Register() {
  const { authApi, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
useTitle("Get into neo world")
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await authApi.register(form);
      setUser(result.data.user);
      navigate("/chat");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      <AuthSidebar />
      <div className="w-full md:w-1/2 bg-neo-paper p-6 md:p-12 flex flex-col justify-center">
        <button
          onClick={() => navigate("/")}
          className="text-neo-quiet hover:text-neo-ink mb-12 font-semibold text-sm hover:cursor-pointer"
        >
          ← Back to the welcome page
        </button>

        <div className="max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-neo-ink mb-3">
            Make some room.
          </h1>
          <p className="text-neo-quiet mb-12">
            Create a home for the thought that deserves a little more time.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="YOUR NAME"
              id="username"
              placeholder="How should Neo call you?"
              name="username"
              value={form.username}
              onChange={handleChange}
            />
            <Input
              label="EMAIL ADDRESS"
              id="email"
              placeholder="you@somewhere.good"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <Input
              label="PASSWORD"
              id="password"
              type="password"
              placeholder="A secret only you know"
              name="password"
              value={form.password}
              onChange={handleChange}
            />

            <Button
              type="submit"
              className="w-full bg-neo-coral text-neo-ink border-2 border-neo-ink py-3 font-bold"
            >
              Create my space
            </Button>
          </form>

          <p className="text-center text-neo-quiet text-sm mt-8">
            Already have a space?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-neo-ink font-bold hover:underline hover:cursor-pointer"
            >
              Log in instead
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;