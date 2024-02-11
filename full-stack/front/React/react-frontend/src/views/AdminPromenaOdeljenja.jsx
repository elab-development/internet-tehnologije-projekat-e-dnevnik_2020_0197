import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarAdmin from './NavBarAdmin';

function AdminPromenaOdeljenja() {

  const [ucenikData, setUcenikData] = useState({});
  const [odeljenja, setOdeljenja] = useState([]);
  const [selectedOdeljenje, setSelectedOdeljenje] = useState('');

  const ucenikId = window.sessionStorage.getItem("a_ucenik_id");
  const token = window.sessionStorage.getItem("auth_token");

  function updateUcenikData() {
    try {
      axios.put(
        `http://127.0.0.1:8000/api/izmenaucenika/${ucenikId}`,
        { odeljenjeId: selectedOdeljenje }, 
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {

    const fetchOdeljenja = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/odeljenja`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setOdeljenja(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchUcenikData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/ucenici/${ucenikId}`, {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          setUcenikData(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchOdeljenja();
      fetchUcenikData();
    
  }, [token, ucenikId]);

  const handleOdeljenjeChange = (e) => {
    setSelectedOdeljenje(e.target.value);
  };

  const filteredOdeljenja = odeljenja.filter((odeljenje) => odeljenje.razred === ucenikData.razred);

  return (
    <div>
      <NavBarAdmin />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <div className="card" style={{ width: 18 + "rem" }}>
        <div className="card-header" style={{ color: 'navy', fontSize: '24px' }}>Podaci o učeniku</div>
        <div className="card-body">
          <h5 className="card-title">{ucenikData.ime} {ucenikData.prezime}</h5>
          <p className="card-text">
            Deseta gimnazija <br />
            Odeljenje: {ucenikData.odeljenje} <br />
            E-mail: {ucenikData.email}
          </p>
          <h6 className="card-title" style={{ textAlign: "right" }}>ID učenika: {ucenikData.id}</h6>
          <form>
            <div className="mb-3">
              <label htmlFor="odeljenjeSelect" className="form-label">Izaberite novo odeljenje:</label>
              <select
                className="form-select"
                id="odeljenjeSelect"
                value={selectedOdeljenje}
                onChange={handleOdeljenjeChange}
              >
                <option value="">Izaberite...</option>
                {filteredOdeljenja.map((odeljenje) => (
                  <option key={odeljenje.id} value={odeljenje.id}>
                    {odeljenje.razred}-{odeljenje.indeks}
                  </option>
                ))}
              </select>
            </div>
            <button onClick={updateUcenikData}  className="btn btn-primary">Promeni odeljenje</button>
          </form>
        </div>
      </div>
    </div>
</div>
  );
}

export default AdminPromenaOdeljenja;

