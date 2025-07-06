import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Sidebar from '../components/Sidebar';
import DashboardHome from '../components/DashboardHome';
import Members from '../components/Members';
import Attendance from '../components/Attendance';
import GymAtmosphere from '../components/GymAtmosphere';
import HealthReport from '../components/HealthReport';
import '../styles/Dashboard.css';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out:', error);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} onLogout={handleLogout} />
      
      <main className={`dashboard-main ${sidebarOpen ? '' : 'expanded'}`}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/members" element={<Members />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/atmosphere" element={<GymAtmosphere />} />
          <Route path="/health" element={<HealthReport />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard; 