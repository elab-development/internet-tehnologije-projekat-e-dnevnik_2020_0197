import { useParams } from 'react-router-dom';
import '../style/OceneDeteta.css';

export default function OceneDeteta() {

    const {idDeteta, idPredmeta}=useParams();
    
    const ocene = [
        { id:1,ocena: 5, opis: 'kontrolni zadatak' },
        { id:2,ocena: 5, opis: 'pismeni zadatak' },
        { id:3,ocena: 4, opis: 'kontrolni zadatak' },
        { id:4,ocena: 4, opis: 'pismeni zadatak' },
  
        
      ];

      function izracunajProsek(ocene) {
        if (ocene.length === 0) {
          return 0;
        }
      
        const sumaOcena = ocene.reduce((suma, ocena) => suma + ocena.ocena, 0);
        const prosecnaOcena = sumaOcena / ocene.length;
      
        // Zaokruživanje na dve decimale
        return prosecnaOcena.toFixed(2);
      }

      const prosecnaOcena = izracunajProsek(ocene);


    return(
        <div>
        <h2 id="Ocene">Ocene:</h2>
        <table id="tabelaOcena">
          <thead>
            <tr>
              <th>Ocena</th>
              <th>Opis ocene</th>
            </tr>
          </thead>
          <tbody>
            {ocene.map((ocena) => (
              <tr key={ocena.id}>
                <td>{ocena.ocena}</td>
                <td>{ocena.opis}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          <tr>
            <td colSpan="2" id="prosecnaOcena">Prosečna ocena:</td>
            <td>{prosecnaOcena}</td>
          </tr>
        </tfoot>
        </table>
        
        </div>
        );
  }