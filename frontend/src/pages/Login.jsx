import { useState, useContext } from "react";
import Button from "../components/ui/Button.jsx";
import Input from "../components/ui/Input.jsx";
import { AuthContext } from "../context/authContext.jsx";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const result = await login(form);
      setUser(result.user)
      navigate("/chat");
    } catch (error){
      setError("Login failed. Please try again." || error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <p>Back to the welcome page</p>
        <h1>Good to see you.</h1>
        <h3>Pick up the thread wherever you left it.</h3>

        {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
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
            placeholder="Your secret"
            onChange={handleChange}
            value={form.password}
            name="password"
          />
          <Button>Sign In</Button>
        </form>

        <h6>
          New here?
          <span className="font-semibold">Make one in seconds</span>
        </h6>
      </div>
    </>
  );
}

export default Login;
