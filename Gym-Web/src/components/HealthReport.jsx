import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../firebase/config';
import '../styles/HealthReport.css';

function HealthReport() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const reportsRef = ref(realtimeDb, 'health_reports');
    const unsubscribe = onValue(reportsRef, (snapshot) => {
      if (snapshot.exists()) {
        const reportsData = [];
        snapshot.forEach((childSnapshot) => {
          reportsData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        setReports(reportsData);
      }
    });

    return () => unsubscribe();
  }, []);

  const getStatusClass = (report) => {
    const hasIssue = 
      report.heartRateAverage < 60 || report.heartRateAverage > 100 ||
      report.bloodOxygenAverage < 95 ||
      report.bloodPressureAverage.split('/')[0] < 90 || 
      report.bloodPressureAverage.split('/')[0] > 120;
    
    return hasIssue ? 'status-warning' : 'status-normal';
  };

  return (
    <div className="health-report-container">
      <h2>Health Reports</h2>
      
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Member Name</th>
              <th>Heart Rate (60-100 bpm)</th>
              <th>Blood Oxygen (95-100%)</th>
              <th>Blood Pressure (90/60 - 120/80)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className={getStatusClass(report)}>
                <td>{report.username}</td>
                <td>{report.heartRateAverage} bpm</td>
                <td>{report.bloodOxygenAverage}%</td>
                <td>{report.bloodPressureAverage}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(report)}`}>
                    {getStatusClass(report) === 'status-warning' ? 'Warning' : 'Normal'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HealthReport; 