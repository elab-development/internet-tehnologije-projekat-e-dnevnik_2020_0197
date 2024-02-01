import '../style/UceniciOdeljenja.css';
import { Link } from 'react-router-dom';

export default function UceniciOdeljenja() {

    const ucenici = [
        { id:1, ImePrezime: 'Ana Vukovic'},
        { id:2,ImePrezime: 'Dusko Misic'},
        { id:3,ImePrezime: 'Ivana Radojevic'},
        { id:4,ImePrezime: 'Marko Radivojevic'},
        { id:5,ImePrezime: 'Milena Tosic'},   
        { id:6,ImePrezime: 'Vuk Aleksic'},
        { id:7,ImePrezime: 'Vuk Djokic'},
        { id:8,ImePrezime: 'Masa Grujic'},
        { id:9,ImePrezime: 'Tea Grujic'},
        { id:10,ImePrezime: 'Vanja Vilotic'},
        { id:11, ImePrezime: 'Anja Dedic'},
        { id:12,ImePrezime: 'Bogdan Zarkovic'},
        { id:13,ImePrezime: 'Pavle Dukic'},
        { id:14,ImePrezime: 'Nebojisa Radovanovic'},
        { id:15,ImePrezime: 'Milica Tadic'},   
        { id:16,ImePrezime: 'Sofija Markovic'},
        { id:17,ImePrezime: 'Sara Dobric'},
        { id:18,ImePrezime: 'Biljana Lukaja'},
        { id:19,ImePrezime: 'Filip Popovic'},
        { id:20,ImePrezime: 'Milos Medic'},
      ];



    return  (
        <div>
          <h2 className="txtUcenici">Ucenici:</h2>
          <div className='SviUcenici'>
            {ucenici.map((ucenik) => (
              <Link to={`/odeljenje/${ucenik.id}/7`} key={ucenik.id} className="odeljenje-okvir-za-ucenike">
                <p>Ime i prezime: {ucenik.ImePrezime}</p>
              </Link>
            ))}
          </div>
        </div>
      );
      };
