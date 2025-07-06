import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../firebase/config';
import { Chart as ChartJS } from 'chart.js/auto';
import { Doughnut, Bar } from 'react-chartjs-2';
import '../styles/DashboardHome.css';

const db = realtimeDb;

function DashboardHome() {
  const [stats, setStats] = useState({
    totalMembers: 0,
    liveAttendance: 0,
    totalTrainers: 5,
    totalPackages: 3
  });

  const [weeklyAttendance, setWeeklyAttendance] = useState([]);

  useEffect(() => {
    // Fetch live attendance
    const attendanceRef = ref(db, 'attendanceCounters/liveattendancecnt');
    const unsubscribe1 = onValue(attendanceRef, (snapshot) => {
      const liveCount = snapshot.val() || 0;
      setStats(prev => ({ ...prev, liveAttendance: liveCount }));
    });

    // Fetch total members
    const membersRef = ref(db, 'members');
    const unsubscribe2 = onValue(membersRef, (snapshot) => {
      const membersCount = snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
      setStats(prev => ({ ...prev, totalMembers: membersCount }));
    });

    // Generate weekly attendance data (mock data for now)
    setWeeklyAttendance(generateWeeklyData());

    return () => {
      unsubscribe1();
      unsubscribe2();
    };
  }, [db]);

  const generateWeeklyData = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(day => ({
      day,
      count: Math.floor(Math.random() * 20)
    }));
  };

  const crowdChartData = {
    labels: ['In Gym', 'Capacity Left'],
    datasets: [{
      data: [stats.liveAttendance, 20 - stats.liveAttendance],
      backgroundColor: ['#4CAF50', '#FFCDD2'],
      borderWidth: 0
    }]
  };

  const weeklyChartData = {
    labels: weeklyAttendance.map(data => data.day),
    datasets: [{
      label: 'Weekly Attendance',
      data: weeklyAttendance.map(data => data.count),
      backgroundColor: '#4CAF50',
      borderColor: '#4CAF50',
      borderWidth: 1
    }]
  };

  return (
    <div className="dashboard-home">
      <h1>Dashboard Overview</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <i className="fas fa-users"></i>
          <div>
            <h3>Total Members</h3>
            <p>{stats.totalMembers}</p>
          </div>
        </div>

        <div className="stat-card">
          <i className="fas fa-user-tie"></i>
          <div>
            <h3>Total Trainers</h3>
            <p>{stats.totalTrainers}</p>
          </div>
        </div>

        <div className="stat-card">
          <i className="fas fa-box"></i>
          <div>
            <h3>Total Packages</h3>
            <p>{stats.totalPackages}</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Live Gym Crowd</h3>
          <div className="chart-container">
            <Doughnut data={crowdChartData} options={{ cutout: '70%' }} />
            <div className="chart-center-text">
              {stats.liveAttendance} / 20
            </div>
          </div>
        </div>

        <div className="chart-card wide">
          <h3>Weekly Attendance</h3>
          <Bar data={weeklyChartData} options={{
            scales: {
              y: { beginAtZero: true }
            }
          }} />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome; 