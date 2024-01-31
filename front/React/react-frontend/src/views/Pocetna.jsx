import React, { useState } from 'react';
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import '../style/Pocetna.css';

export default function Pocetna(){
    const { setUser, setToken, handleRoleChange } = useStateContext();
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        handleRoleChange(event.target.value);
    }

    const Ulogujse = () => {
        setToken(123); // Postavljanje tokena, prilagodi..
        setUser({});

        switch (selectedValue) {
            case "Ucenik":
                navigate("/ucenik-home");
                break;
            case "Profesor":
                navigate("/profesor-home");
                break;
            case "Roditelj":
                navigate("/roditelj-home");
                break;
            default:
                console.error("Nepoznata uloga:", selectedValue);
        }
    }

    return (
        <div className='forma'>
            <div className='sve'>
                <h1>Dobrodosli!</h1>
                <h4>Ulogujte se na eDnevnik</h4>
                <form id="tekstForme">
                    <div>
                        <label htmlFor="Username">
                            <span style={{ color: "red" }}>*</span>Username
                        </label>{" "}
                        <br />
                        <input
                            type="text"
                            name="username"
                            className="txt"
                            id="username"
                            placeholder="npr. pera.peric"
                        />
                        <br />{" "}
                        <br></br>
                        <span
                            style={{ fontSize: "small", display: "none", color: "red" }}
                            id="username-error"
                        >
                            Polje je obavezno!
                        </span>
                    </div>
                    <div>
                        <label htmlFor="password">
                            <span style={{ color: "red" }}>*</span>Password
                        </label>{" "}
                        <br />
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="npr.lozinka123"
                        />
                        <br />{" "}
                        <br></br>
                        <span
                            style={{ fontSize: "small", display: "none", color: "red" }}
                            id="password-error"
                        >
                            Polje je obavezno!
                        </span>
                    </div>
                </form>

                <label htmlFor="combo-box"> <span style={{ color: "red" }}>*</span>Izaberite opciju </label>
                <select id="combo-box" value={selectedValue} onChange={handleSelectChange}>
                    <option value=""> Izaberite opciju</option>
                    <option value="Roditelj">Roditelj</option>
                    <option value="Ucenik">Ucenik</option>
                    <option value="Profesor">Profesor</option>
                </select>
                <p id="izabranaOpcija">Izabrana opcija: {selectedValue}</p>
                <span
                    style={{ fontSize: "small", display: "none", color: "red" }}
                    id="password-error"
                >
                    Polje je obavezno!
                </span>

                <button id="Login" onClick={Ulogujse}>
                    Uloguj se
                </button>
            </div>
        </div>
    );
}
