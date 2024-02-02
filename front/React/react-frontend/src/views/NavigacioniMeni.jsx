import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavigacioniMeni.css';
import { useStateContext } from '../context/ContextProvider';

const NavigacioniMeni = () => {
  const { role, handleLogout } = useStateContext();
    
  return (
    <nav className='CeoNavigacioniMeni'>
      <ul>
        
      <li className='logo'>eDnevnik</li>

        {role === 'Ucenik' && (
          <li>
            <Link to='/ucenik-home'>Pocetna</Link>
          </li>
        )}

        {role === 'Profesor' && (
          <li>
            <Link to='/profesor-home'>Pocetna</Link>
          </li>
        )}

        {role === 'Roditelj' && (
          <li>
            <Link to='/roditelj-home'>Pocetna</Link>
          </li>
        )}

      {['Ucenik', 'Profesor', 'Roditelj'].includes(role) && (
      <li>
        <Link to='/info'>Informacije</Link>
      </li>
      )}

        <li>
          <Link to='/' 
          onClick={handleLogout} 
          style={{ float: 'right', marginLeft:'900px'}}>
            Kraj rada</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigacioniMeni;
