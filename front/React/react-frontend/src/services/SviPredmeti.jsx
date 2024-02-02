// src/services/SviPredmeti.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const SviPredmeti = () => {
  const [predmeti, setPredmeti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/predmeti");
        console.log(response.data);
        setPredmeti(response.data.predmeti);
        setLoading(false);
      } catch (error) {
        console.error("Greška prilikom dohvatanja predmeta:", error.message); 
        setError("Greška prilikom dohvatanja predmeta: " + error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Učitavanje...</p>;
  }

  if (error) {
    const fallbackPredmeti = [
      {"id":1,"naziv":"Matematika"},
      {"id":2,"naziv":"Srpski"},
      {"id":3,"naziv":"Engleski"},
      {"id":4,"naziv":"Nemacki"},
      {"id":5,"naziv":"Latinski"},
      {"id":6,"naziv":"Fizika"},
      {"id":7,"naziv":"Hemija"},
      {"id":8,"naziv":"Biologija"},
      {"id":9,"naziv":"Muzicko"},
      {"id":10,"naziv":"Likovno"},
      {"id":11,"naziv":"Sociologija"},
      {"id":12,"naziv":"Filozofija"},
      {"id":13,"naziv":"Geografija"},
      {"id":14,"naziv":"Informatika"},
      {"id":15,"naziv":"Fizicko"}
    ];

    if (!predmeti.length) {
      setPredmeti(fallbackPredmeti);
    }

    return (
      <div>
        <p>Lista predmeta:</p>
        <ul style={{ listStyle: 'none' }}>
          {fallbackPredmeti.map((predmet) => (
            <li key={predmet.id}>{predmet.naziv}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {predmeti.map((predmet) => (
          <li key={predmet.id}>{predmet.naziv}</li>
        ))}
      </ul>
    </div>
  );
};

export default SviPredmeti;
