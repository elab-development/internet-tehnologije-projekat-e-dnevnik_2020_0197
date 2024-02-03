import React, { useState } from 'react';
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import '../style/Pocetna.css';

export default function Pocetna(){
    const { setUser, setToken, handleRoleChange } = useStateContext();
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [selectedValueError, setSelectedValueError] = useState(false);


    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
        handleRoleChange(event.target.value);
    }

    const Ulogujse = () => {
        setToken(123); // Postavljanje tokena, prilagodi..
        setUser({});

        if (!username || !password || !selectedValue) {
            
            setUsernameError(!username);
            setPasswordError(!password);
            setSelectedValueError(!selectedValue);
            return;
        }

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
            <div className='celaForma'>
            <div className='transparentna-slika'></div>
                <h1>Dobro dosli!</h1>
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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br />{" "}
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
                            type="password"
                            name="password"
                            id="password"
                            placeholder="npr.lozinka123"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    <option disabled hidden value=""> Izaberite opciju</option>
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
