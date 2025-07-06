import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../firebase/config';
import '../styles/Members.css';

function Members() {
  const [members, setMembers] = useState([]);
  const db = realtimeDb;

  useEffect(() => {
    const membersRef = ref(db, 'members');
    const unsubscribe = onValue(membersRef, (snapshot) => {
      if (snapshot.exists()) {
        const membersData = [];
        snapshot.forEach((childSnapshot) => {
          const member = childSnapshot.val();
          membersData.push({
            id: childSnapshot.key,
            ...member
          });
        });
        setMembers(membersData);
      }
    });

    return () => unsubscribe();
  }, [db]);

  const calculateRemainingDays = (endDate) => {
    const end = new Date(endDate);
    const today = new Date();
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 'Expired';
  };

  return (
    <div className="members-container">
      <div className="members-header">
        <h2>Members Management</h2>
        <button className="btn add-member-btn" onClick={() => window.location.href='/dashboard/add-member'}>
          <i className="fas fa-plus"></i> Add New Member
        </button>
      </div>

      <div className="table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Plan</th>
              <th>Join Date</th>
              <th>End Date</th>
              <th>Remaining Days</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.fullName}</td>
                <td>{member.plan}</td>
                <td>{member.joinDate}</td>
                <td>{member.endDate}</td>
                <td>{calculateRemainingDays(member.endDate)}</td>
                <td>
                  <button className="action-btn edit">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="action-btn delete">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Members; 