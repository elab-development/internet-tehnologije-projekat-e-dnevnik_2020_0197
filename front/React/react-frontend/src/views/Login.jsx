import React, { useState } from 'react';
export default function Login(){

    return <div>


<h1>Forma</h1>
  <form id="forma">
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
        placeholder="npr. milica.djordjevic"
      />
      <br />{" "}
      <span
        style={{ fontSize: "small", display: "none", color: "red" }}
        id="imePrezime-error"
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
      <span
        style={{ fontSize: "small", display: "none", color: "red" }}
        id="godinaRodjenja-error"
      >
        Polje je obavezno!
      </span>
    </div>
  </form>


    </div>;
  
      };