import { useParams } from 'react-router-dom';
import '../style/PredmetiDeteta.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useStateContext } from '../context/ContextProvider';

export default function PredmetiDeteta() {
  const { id = 7 } = useParams();

  const { role } = useStateContext();

  const predmeti = [
    { id:1, naziv: 'Matematika', profesor: 'Pera Perić' },
    { id:2,naziv: 'Fizika', profesor: 'Mika Mikić' },
    { id:3,naziv: 'Srpski', profesor: 'Vesna Mikić' },
    { id:4,naziv: 'Engleski', profesor: 'Pavle Mikić' },
    { id:5,naziv: 'Hemija', profesor: 'Radomir Mikić' },
    { id:6,naziv: 'Biologija', profesor: 'Milanka Mikić' },
    { id:7,naziv: 'Muzicko', profesor: 'Nemanja Mikić' },
   /* { id:8,naziv: 'Likovno', profesor: 'Milica Mikić' },
    { id:9,naziv: 'Fizicko', profesor: 'Nevena Mikić' },
    { id:10,naziv: 'Latinski', profesor: 'Ljubisa Mikić' },*/
    
  ];

  const izostanciPodaci = [
    { datum: '22.09', razlog: 'opravdani izostanak' },
    { datum: '02.10', razlog: 'neopravdani izostanak' },
    { datum: '24.10', razlog: 'neopravdani izostanak' },
    { datum: '03.11', razlog: 'neopravdani izostanak' },
    { datum: '29.12', razlog: 'opravdani izostanak' },
  ];

  const [filter, setFilter] = useState('svi'); 

  const filtriraniIzostanci = () => {
    if (filter === 'svi') {
      return izostanciPodaci;
    } else {
      return izostanciPodaci.filter(izostanak => 
        (filter === 'opravdani' && izostanak.razlog === 'opravdani izostanak') ||
        (filter === 'neopravdani' && izostanak.razlog === 'neopravdani izostanak')
      );
    }
  };

  if (role !== 'Roditelj' && role!=='Ucenik') {
    
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
        <br></br>
        <h2 id="predmetiDeteta">Predmeti u tekucoj skolskoj godini      </h2>
        <div id="container">
          <div></div>
          <div>
        <table id="tabelaPredmeta">
          <thead>
            <tr>
              <th>Naziv predmeta</th>
              <th>Naziv profesora</th>
              
            </tr>
          </thead>
          <tbody>
            {predmeti.map((predmet) => (
              <tr key={predmet.id}>
                <td>
                  
                 <Link to={`/ocene/${id}/${predmet.id}`} className="linkovi">{predmet.naziv}</Link>
                 </td>
                <td>{predmet.profesor}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        <div className="izostanci">
      <h2>Izostanci</h2>
      <div>
        <label>Filter: </label>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="svi">Svi</option>
          <option value="opravdani">Opravdani</option>
          <option value="neopravdani">Neopravdani</option>
        </select>
      </div>
      <ul>
        {filtriraniIzostanci().map((izostanak, index) => (
          <li key={index}>
            {izostanak.datum}: {izostanak.razlog}
          </li>
        ))}
      </ul>
    </div>

    <div></div>

</div>
   
     { /*  <div>
        <h3 id="txtPdfFormat">Da li zelite da vam se prikazu sve ocene u pdf formatu?</h3>
        <p id="OdgovorPdfFormat">DA</p>
        </div>
            */}
      </div>
    );
  };
  //salje se na stranicu za ocene i prosledjuje se id deteta i id predmeta