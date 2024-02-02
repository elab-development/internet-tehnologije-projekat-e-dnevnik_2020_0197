import React, { useState, useEffect } from 'react';
import '../style/Profesor.css';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';


const ProfesorOdeljenja = () => {
  const [odeljenja, setOdeljenja] = useState([]);

 /* const { role } = useStateContext();

  if (role !== 'Profesor') {
    
    return <Link to="/" />;
  } */

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

  const { role } = useStateContext();

  if (role !== 'Profesor') {
    
    return (

      <h2 style={{
        padding: '20px',
        
        paddingTop: '300px',
        paddingBottom: '300px',
        border: '2px solid #333',
        borderRadius: '10px',
        width: '600px',
        margin: '0 auto',
        marginTop:'300px',
        backgroundColor: '#fff',
        fontFamily: 'Cambria, Cochin, Georgia, Times, Times New Roman, serif',
        fontStyle: 'italic',
        color: '#3a3f28',
        textAlign: 'center',
        marginTop: '80px!important',
      }}>
        Nemate pristup ovoj stranici.
        <br />
        <br />
        Vratite se na login stranicu pritiskom na Kraj rada.
      </h2>
    );
  }
  return (
     
    <div id="pozadina">
      <h1  className='dobrodosliProfesore'>Dobro došli profesore!</h1>
     
      <ProfesorOdeljenja />
    </div>
  
  );
};

export default ProfesorHomePage;
