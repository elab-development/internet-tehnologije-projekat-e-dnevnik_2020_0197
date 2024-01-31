import React, { useState, useEffect } from 'react';
import '../style/Profesor.css';

const ProfesorOdeljenja = () => {
  const [odeljenja, setOdeljenja] = useState([]);

  useEffect(() => {

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

  return (
 
    <div className="odeljenja">
      <h3>Odeljenja kojima predajete:</h3>
      <ul>
        {odeljenja.map((odeljenje) => (
          <li key={odeljenje.id}>{odeljenje.naziv}</li>
        ))}
      </ul>
    </div>
  );
};

const ProfesorHomePage = () => {
  return (
     
    <div className='dobrodosliProfesore'>
      <h1>Dobrodošli profesore!</h1>
      {/* Dodajte ostale elemente ili komponente koje želite na ProfesorHomePage */}
      <ProfesorOdeljenja />
    </div>
  
  );
};

export default ProfesorHomePage;
