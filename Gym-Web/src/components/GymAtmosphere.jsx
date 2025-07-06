import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { realtimeDb } from '../firebase/config';
import { Doughnut } from 'react-chartjs-2';
import '../styles/GymAtmosphere.css';

function GymAtmosphere() {
  const [atmosphere, setAtmosphere] = useState({
    oxygenLevel: 0,
    co2Level: 0,
    humidityLevel: 0
  });

  useEffect(() => {
    const atmosphereRef = ref(realtimeDb, 'atmosphere');
    const unsubscribe = onValue(atmosphereRef, (snapshot) => {
      if (snapshot.exists()) {
        setAtmosphere(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, []);

  const createChartData = (value, label) => ({
    labels: [label, 'Remaining'],
    datasets: [{
      data: [value, 100 - value],
      backgroundColor: ['#4CAF50', '#FFCDD2'],
      borderWidth: 0
    }]
  });

  return (
    <div className="atmosphere-container">
      <h2>Gym Atmosphere Monitoring</h2>
      
      <div className="charts-grid">
        <div className="chart-card">
          <h3>Oxygen Level</h3>
          <div className="chart-container">
            <Doughnut 
              data={createChartData(atmosphere.oxygenLevel, 'Oxygen')} 
              options={{ cutout: '70%' }}
            />
            <div className="chart-center-text">
              {atmosphere.oxygenLevel}%
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>CO2 Level</h3>
          <div className="chart-container">
            <Doughnut 
              data={createChartData(atmosphere.co2Level * 100, 'CO2')} 
              options={{ cutout: '70%' }}
            />
            <div className="chart-center-text">
              {(atmosphere.co2Level * 100).toFixed(2)}%
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>Humidity Level</h3>
          <div className="chart-container">
            <Doughnut 
              data={createChartData(atmosphere.humidityLevel, 'Humidity')} 
              options={{ cutout: '70%' }}
            />
            <div className="chart-center-text">
              {atmosphere.humidityLevel}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymAtmosphere; 