import slika_tinejdzer from "../img/slika_tinejdzer.jpg";
import slika_tinejdzer2 from "../img/slika_tinejdzer2.jpg";
import slika_tinejdzer3 from "../img/slika_tinejdzer3.jpg";
import '../style/RoditeljHomePage.css';
import React from 'react';
import { useStateContext } from "../context/ContextProvider";
import { Link } from 'react-router-dom';


export default function RoditeljHomePage() {

  const { User, Token, handleRoleChange } = useStateContext();
  const { role } = useStateContext();

  if (role !== 'Roditelj') {
    
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
  
    return <div className="sve">
      
      <br></br>
      <h1 id="dobrodosliRoditelj">Dobro dosli u eDnevnik!</h1>
      <h2 id="izaberiDete">Izaberite dete:</h2>
    
    
      <Link to="/predmeti/1">
        <img src={slika_tinejdzer} alt="Dete" id="dete1" />
      </Link>
      <Link to="/predmeti/2">
        <img src={slika_tinejdzer2} alt="Dete" id="dete2" />
      </Link>

      <Link to="/predmeti/3">
        <img src={slika_tinejdzer3} alt="Dete" id="dete3" />
      </Link>
      <div className="horizontalno">
      <h3 id="ImePrezime1">Vasilije</h3>
      <h3 id="ImePrezime2">Dragomir</h3>
      <h3 id="ImePrezime3">Luka</h3>
      </div>

      </div>;
  }