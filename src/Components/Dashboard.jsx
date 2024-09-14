import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/providers');
        setProviders(response.data);
      } catch (error) {
        console.error('Failed to fetch providers', error);
      }
    };

    fetchProviders();
  }, []);

  return (
    <div className="container">
      <h2>Available Gas Providers</h2>
      <ul className="list-group">
        {providers.map(provider => (
          <li key={provider._id} className="list-group-item">
            {provider.name}
            {/* Add slot booking component */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
