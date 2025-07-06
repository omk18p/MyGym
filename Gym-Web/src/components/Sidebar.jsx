import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar({ isOpen, onToggle, onLogout }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar__header">
        <img src="/assets/logo.png" alt="Gym Logo" className="sidebar__logo" />
        <button className="sidebar__toggle" onClick={onToggle}>
          <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
        </button>
      </div>

      <nav className="sidebar__nav">
        <NavLink to="/dashboard" end className="nav__item">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/dashboard/members" className="nav__item">
          <i className="fas fa-users"></i>
          <span>Members</span>
        </NavLink>

        <NavLink to="/dashboard/attendance" className="nav__item">
          <i className="fas fa-calendar-check"></i>
          <span>Attendance</span>
        </NavLink>

        <NavLink to="/dashboard/atmosphere" className="nav__item">
          <i className="fas fa-wind"></i>
          <span>Gym Atmosphere</span>
        </NavLink>

        <NavLink to="/dashboard/health" className="nav__item">
          <i className="fas fa-heart"></i>
          <span>Health Report</span>
        </NavLink>

        <button onClick={onLogout} className="nav__item logout">
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar; 