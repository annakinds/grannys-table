import { useState } from 'react'
import './reset.css'
import './App.css'
import Tables from './components/TableDashboard';
import Service from './components/RestaurantService';

function App() {
  
  const [active, setActive] = useState(false);

  return (
    <div>
      <Tables active={active} setActive={setActive} />
      <Service active={active} />
    </div>
  );
};

export default App
