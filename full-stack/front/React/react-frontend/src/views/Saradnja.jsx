import React from 'react'
import SaradnjaService from "../services/SaradnjaService";
import NavBar from './NavBar';

function Saradnja() {
  return (
    <div>
     <NavBar/>

     <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", padding: "20px" }}>
        <h3>Medjunarodna saradnja</h3>
        <br />
        <p>
          Naša škola saradjuje sa mnogim svetskim univerzitetima. Želja nam je da naši učenici imaju priliku da saradjuju sa uspešnim
          stručnjacima iz različitih oblasti. Ovde možete videti kontakt podatke naših najistaknutijih saradnika. 
        </p>
        <p>
          Budite slobodni da ih kontaktirate u terminu konsultacija ukoliko imate bilo kakva pitanja. Naši učenici već godinama nakon završetka srednjoškolskog obrazovanja
          u velikom broju odlaze na studije u inostranstvo upravo kod naših saradnika.
        </p>
        <img src="https://img.freepik.com/free-vector/successful-partnership-negotiation-partners-handshaking_335657-2453.jpg" alt="partnership" style={{ width: "100%", marginTop: "20px" }} />
      </div>
      <div className="list-group" style={{ width: "400px" }}>
        <SaradnjaService />
      </div>
    </div>
  </div>
  )
}

export default Saradnja
