// src/services/SviPredmeti.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const SviPredmeti = () => {
  const [korisnici, setKorisnici] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setKorisnici(response.data);
      } catch (error) {
        console.error("Greška prilikom dohvatanja korisnika:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {korisnici.map((korisnik) => (
          <li key={korisnik.id}>{korisnik.name} - {korisnik.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default SviPredmeti;
