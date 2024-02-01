import React, { useState, useEffect } from 'react';
import '../style/Profesor.css';
import { Link } from 'react-router-dom';

const ProfesorOdeljenja = () => {
  const [odeljenja, setOdeljenja] = useState([]);

 /* useEffect(() => {

    //ovde treba da dodje pravi api poziv tj treba da pokupim podatke sa svog servera
    //i azurira stanje odeljenja




    const fetchOdeljenja = async () => {
      try {
        // Zamena za pravi API poziv
        //const response = await fetch('/api/profesor/odeljenja');
        //const data = await response.json();
        //setOdeljenja(data);
      } catch (error) {
        console.error('Greška prilikom dohvatanja odeljenja:', error);
      }
    };





    fetchOdeljenja();
  }, []);
*/

const odelj = [
  { id:1, nazivOdeljenja: '5-3', Razredni: 'Pera Perić' },
  { id:2,nazivOdeljenja: '5-5', Razredni: 'Mika Mikić' },
  { id:3,nazivOdeljenja: '7-4', Razredni: 'Vesna Mikić' },
  { id:4,nazivOdeljenja: '7-7', Razredni: 'Pavle Mikić' },
  { id:5,nazivOdeljenja: '8-2', Razredni: 'Radomir Mikić' },
  { id:6,nazivOdeljenja: '8-3', Razredni: 'Milanka Mikić' },

  
];


return (
  <div>
    <h3 className="odeljenja">Odeljenja kojima predajete:</h3>
    <div className='spoljniKont'>
      {odelj.map((odeljenje) => (
        <Link to={`/odeljenje/${odeljenje.id}`} key={odeljenje.id} className="odeljenje-okvir">
          <p>Naziv odeljenja: {odeljenje.nazivOdeljenja}</p>
          <p>Razredni starešina: {odeljenje.Razredni}</p>
        </Link>
      ))}
    </div>
  </div>
);
};

const ProfesorHomePage = () => {
  return (
     
    <div id="pozadina">
      <h1  className='dobrodosliProfesore'>Dobro došli profesore!</h1>
      {/* Dodajte ostale elemente ili komponente koje želite na ProfesorHomePage */}
      <ProfesorOdeljenja />
    </div>
  
  );
};

export default ProfesorHomePage;
