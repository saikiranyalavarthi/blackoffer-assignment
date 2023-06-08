import React, { useEffect,useState } from 'react';
import Dashboard from './Dashboard';
import axios from 'axios';
const App = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employees');
        setdata(response.data);
      } catch (error) {
        console.error('Error retrieving employees', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <Dashboard data={data} />
    </div>
  );
};

export default App;







  
  

    
    
