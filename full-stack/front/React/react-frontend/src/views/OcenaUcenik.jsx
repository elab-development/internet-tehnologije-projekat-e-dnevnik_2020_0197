import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import OcenaPredmetView from './OcenaPredmetView';
import NavBarProfesor from './NavBarProfesor';

function OcenaUcenik() {

    const navigate = useNavigate();

    const token =  window.sessionStorage.getItem("auth_token");

    const ucenik = window.sessionStorage.getItem("p_ucenik_id");
    const uid = parseInt(ucenik, 10);

    const profesor = window.sessionStorage.getItem("profesor_id");
    const pid = parseInt(profesor, 10);

    const ime = window.sessionStorage.getItem("p_ucenik_ime");
    const prezime = window.sessionStorage.getItem("p_ucenik_prezime");

    const [ocene, setOcene] = useState([]);

    useEffect(() => {
        if (token && pid && uid) {
          let config = {
            method: "get",
            url: `http://127.0.0.1:8000/api/ocene-ucenika/${uid}/${pid}`,
            headers: {
              Authorization: "Bearer " + token,
            },
          };
    
          axios
            .request(config)
            .then((response) => {
              console.log(response);
              setOcene(response.data.ocene);
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          navigate("/pocetna");
        }
      }, [token, pid, navigate]);

      const prosecanProsek = () => {
        if (ocene.length === 0) return 0;

        const sumaOcena = ocene.reduce((acc, ocena) => acc + ocena.ocena, 0);
        return sumaOcena / ocene.length;
    };



  return (
    <div>
      <NavBarProfesor />
      <h2 style={{ width: "100%", textAlign: "center", paddingTop: "10px", marginBottom: "20px", paddingBottom: "10px", backgroundColor: "white" }}>
            {ime} {prezime}
       </h2>

       <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: '15px', marginTop:"50px", marginBottom:"50px" }}>
                {ocene.map((ocena) => (
                    <OcenaPredmetView ocena={ocena} key={ocena.id} style={{ margin: "8px" }} />
                ))}
            </div>

       <div style={{ display:"flex", justifyContent:"center"}}>
        <div className="card" style={{ width: 18 + "rem"}}>
           <div className="card-header" style={{ color: 'navy', fontSize: '24px' }}>prosečna ocena: {prosecanProsek().toFixed(2)}</div>
        </div>
      </div>
           
    </div>
  )
}

export default OcenaUcenik
