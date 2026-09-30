import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button.jsx";
import NeoChatIcon from "./layout/NeoIcon.jsx";

function Navbar({ sidebarOpen, setSidebarOpen }) {
  const { authApi, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authApi.logout();
      setUser(null);
      toast.success("Logged out successfully");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <nav className="bg-neo-canvas border-b-2 border-neo-border p-4 md:p-6 flex justify-between items-center">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden font-bold text-neo-ink text-xl"
      >
        ☰
      </button>

    
      <NeoChatIcon />

      <div className="flex gap-2 md:gap-4">
        <Button
          variant="secondary"
          onClick={handleLogout}
          className="bg-neo-coral border-2 border-neo-ink text-neo-ink font-bold text-sm"
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;