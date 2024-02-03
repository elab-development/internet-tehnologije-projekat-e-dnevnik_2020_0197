// src/views/Informacije.jsx
import React from "react";
import SviPredmeti from "../services/SviPredmeti";

const Informacije = () => {
  const style = {
    textAlign: "center",  
    backgroundColor: "white",  
    padding: "20px" ,
    marginLeft:'400px',
    marginRight:'400px',
    marginTop: '100px',
    borderRadius: '20px'
  };

  return (
    <div style={style}>
      <h1>X gimnazija - forum</h1>
      <p>
        Nasa skola saradjuje sa mnogim svetskim univerzitetima. Zelja nam je da nasi ucenici imaju priliku da saradjuju sa uspesnim
        strucnjacima iz razlicitih oblasti. Ispod mozete videti kontakt podatke nasih najistaknutijih saradnika.
      </p>
      <SviPredmeti />
    </div>
  );
};

export default Informacije;
