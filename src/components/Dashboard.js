import React, { useState } from 'react';

const Dashboard = () => {
  const [resources, setResources] = useState([]);

  // Here, you can fetch the resource data from the database and update the 'resources' state accordingly.

  return (
    <div>
      <h2>Resource Dashboard</h2>
      {resources.map((resource, index) => (
        <div key={index}>
          <h3>{resource.fullName}</h3>
          <p>Technology: {resource.technology.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
