import React from 'react';
import { Link } from 'react-router-dom';
import '../style/NavigacioniMeni.css';
import { useStateContext } from '../context/ContextProvider';

const NavigacioniMeni = () => {
const{role}=useStateContext();
    
  return (
    <nav className='CeoNavigacioniMeni'>
      <ul>
        
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
        <li>
          <Link to='/'>Log Out</Link>
        </li>
        {/* Dodaj još opcija u zavisnosti od uloge */}
      </ul>
    </nav>
  );
};

export default NavigacioniMeni;
