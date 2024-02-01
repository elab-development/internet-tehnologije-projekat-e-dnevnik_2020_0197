import { useParams } from 'react-router-dom';
import '../style/PredmetiDeteta.css';
import { Link } from 'react-router-dom';


export default function PredmetiDeteta() {
  const { id = 7 } = useParams();


  const predmeti = [
    { id:1, naziv: 'Matematika', profesor: 'Pera Perić' },
    { id:2,naziv: 'Fizika', profesor: 'Mika Mikić' },
    { id:3,naziv: 'Srpski', profesor: 'Vesna Mikić' },
    { id:4,naziv: 'Engleski', profesor: 'Pavle Mikić' },
    { id:5,naziv: 'Hemija', profesor: 'Radomir Mikić' },
    { id:6,naziv: 'Biologija', profesor: 'Milanka Mikić' },
    { id:7,naziv: 'Muzicko', profesor: 'Nemanja Mikić' },
    { id:8,naziv: 'Likovno', profesor: 'Milica Mikić' },
    { id:9,naziv: 'Fizicko', profesor: 'Nevena Mikić' },
    { id:10,naziv: 'Latinski', profesor: 'Ljubisa Mikić' },
    
  ];
  

    return (
      <div>
        <h2 id="predmetiDeteta">Predmeti deteta:</h2>
       
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

     { /*  <div>
        <h3 id="txtPdfFormat">Da li zelite da vam se prikazu sve ocene u pdf formatu?</h3>
        <p id="OdgovorPdfFormat">DA</p>
        </div>
            */}
      </div>
    );
  };
  //salje se na stranicu za ocene i prosledjuje se id deteta i id predmeta