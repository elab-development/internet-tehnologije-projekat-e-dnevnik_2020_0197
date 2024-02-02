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
        Kako bi što bolje sagledali obim i dinamiku nastave, kao i obim znanja koju pruža naša škola,
        pripremili smo vam uvid u nastavni program. Ispod možete videti spisak predmeta koji se izučavaju na opštem smeru naše gimnazije.
      </p>
      <SviPredmeti />
    </div>
  );
};

export default Informacije;
