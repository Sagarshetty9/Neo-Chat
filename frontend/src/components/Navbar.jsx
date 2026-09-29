import { useNavigate } from 'react-router-dom';
import { api } from '../api/axios';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <nav>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;