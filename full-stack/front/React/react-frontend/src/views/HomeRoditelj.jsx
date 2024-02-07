import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import DecaView from './DecaView';
import { useEffect } from 'react';

function HomeRoditelj() {
    
    const navigate = useNavigate();

    const token = window.sessionStorage.getItem("auth_token");
    const roditelj = window.sessionStorage.getItem("roditelj_id");
    const id = parseInt(roditelj, 10);

    const ime = window.sessionStorage.getItem("roditelj_ime");
    const prezime = window.sessionStorage.getItem("roditelj_prezime");
    const imeprezime = ime+" "+prezime;

    let [deca, setDeca] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`http://127.0.0.1:8000/api/deca-roditelja/${id}`, {
                  headers: {
                      Authorization: "Bearer " + token,
                  },
              });
              setDeca(response.data.data);
          } catch (error) {
              console.log(error);
          }
      };
      fetchData();
  }, [token, id]);

    if (token === null || roditelj==null) {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
            }}
          >
            <h5>Vratite se na login stranicu i pokušajte ponovo.</h5>
            <button
              type="button"
              className="btn btn-primary"
              data-mdb-ripple-init
              style={{ marginTop: "16px" }} 
              onClick={() => navigate("/pocetna")}
            >
              Login stranica
            </button>
          </div>
        );
      }

  return (
    <div>
     <h1 style={{ width: "100%", textAlign: "center", paddingTop: "10px", marginBottom: "20px", paddingBottom:"10px", backgroundColor: "rgba(0, 0, 0, 0.7)" , color:"white"}}>eRoditelj</h1>
     <h1 style={{ width: "100%", textAlign: "center", marginBottom: "20px", paddingBottom:"10px"}} className='display-2'>{imeprezime}</h1>
   
     <div style={{ paddingTop:"60px"}}>
     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",  gap: '40px' }}>
      {deca?.map((dete) => (
        <DecaView dete={dete} key={dete.id} style={{ margin: "8px" }}/>
      ))}
       </div>
    </div>

    </div>
  )
}

export default HomeRoditelj
