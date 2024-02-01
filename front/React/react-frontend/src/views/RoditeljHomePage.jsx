import slika_tinejdzer from "../img/slika_tinejdzer.jpg";
import slika_tinejdzer2 from "../img/slika_tinejdzer2.jpg";
import '../style/RoditeljHomePage.css';
import React from 'react';
import { useStateContext } from "../context/ContextProvider";
import { Link } from 'react-router-dom';

export default function RoditeljHomePage() {

  const { User, Token, handleRoleChange } = useStateContext();


  
    return <div className="sve">
      
      <br></br>
      <h1 id="dobrodosliRoditelj">Dobrodosli Marina!</h1>
      <h2 id="izaberiDete">Izaberite dete:</h2>
    
    
      <Link to="/predmeti/1">
        <img src={slika_tinejdzer} alt="Dete" id="dete1" />
      </Link>
      <Link to="/predmeti/2">
        <img src={slika_tinejdzer} alt="Dete" id="dete2" />
      </Link>

      <Link to="/predmeti/3">
        <img src={slika_tinejdzer} alt="Dete" id="dete3" />
      </Link>
      <div className="horizontalno">
      <h3 id="ImePrezime1">Pera Peric</h3>
      <h3 id="ImePrezime2">Mika Peric</h3>
      <h3 id="ImePrezime3">Zika Peric</h3>
      </div>

      </div>;
  }