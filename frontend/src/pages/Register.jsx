import { useState, useContext } from "react";

import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

function Register() {
  const { register, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    try {
      const result = await register(form);
      setUser(result.user);
      navigate("/chat");
    } catch (error) {
      setError("Registration failed. Please try again." || error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <p>Back to the welcome page</p>
        <h1>Make Some Room</h1>
        <h3>Create a home for the thought that deserves a little more time.</h3>

        <form onSubmit={handleSubmit}>
          <Input
            label="username"
            id="username"
            placeholder="What should we call you?"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <Input
            label="email"
            id="email"
            placeholder="you@somewhere.good"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="password"
            id="password"
            type="password"
            placeholder="A secret only you know"
            onChange={handleChange}
            value={form.password}
            name="password"
          />
          <Button>Create my space</Button>
        </form>

        <h6>
          Already have an account?
          <span className="font-semibold">Sign in</span>
        </h6>
      </div>
    </>
  );
}

export default Register;
