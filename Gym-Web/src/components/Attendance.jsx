import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../firebase/config';
import '../styles/Attendance.css';

function Attendance() {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const attendanceRef = ref(realtimeDb, 'attendance');
    const unsubscribe = onValue(attendanceRef, (snapshot) => {
      if (snapshot.exists()) {
        const records = [];
        snapshot.forEach((dateSnapshot) => {
          const dateData = dateSnapshot.val();
          const date = dateData.date || dateSnapshot.key;
          
          const attendees = Object.entries(dateData)
            .filter(([key]) => key !== 'date')
            .map(([id, data]) => ({
              id,
              name: data.name,
              checkInTime: data.checkInTime,
              checkOutTime: data.checkOutTime
            }));

          records.push({ date, attendees });
        });
        
        // Sort by date in descending order
        records.sort((a, b) => new Date(b.date) - new Date(a.date));
        setAttendanceRecords(records);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="attendance-container">
      <h2>Attendance Records</h2>
      
      {attendanceRecords.map((record) => (
        <div key={record.date} className="attendance-card">
          <h3>Date: {record.date}</h3>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Check-In Time</th>
                  <th>Check-Out Time</th>
                </tr>
              </thead>
              <tbody>
                {record.attendees.map((attendee) => (
                  <tr key={attendee.id}>
                    <td>{attendee.name}</td>
                    <td>{attendee.checkInTime || 'N/A'}</td>
                    <td>{attendee.checkOutTime || 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Attendance; 