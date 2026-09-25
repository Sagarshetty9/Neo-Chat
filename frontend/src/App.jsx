import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import ChatDashboard from "./pages/ChatDashboard.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
           <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        //protected route
        <Route path="/chat" element={<ChatDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;