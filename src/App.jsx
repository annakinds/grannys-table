import { useState } from 'react'
import './reset.css'
import './App.css'
import Tables from './components/TableDashboard';
import Service from './components/RestaurantService';

function App() {
  
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);



  return (
    <div>
      <Tables active={active} setActive={setActive} />
      <Service active={active} checked={checked} setChecked={setChecked}/>
    </div>
  );
};

export default App
