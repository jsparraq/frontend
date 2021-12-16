import React, { useState } from "react";

import classes from './styles/Login.module.scss'


const Login = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [dni, setDNI] = useState('');
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        console.log(`
          Name: ${name}
          Lastname: ${lastname}
          DNI: ${dni}
          Role: ${role}
          Password: ${password}
        `);
        
        event.preventDefault();
      }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <h1>Crear usuario</h1>

            <label>
                Nombre:
                <input
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            </label>
            
            <label>
                Apellido:
                <input
                name="lastname"
                type="text"
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                required />
            </label>

            <label>
                DNI:
                <input
                name="dni"
                type="number"
                value={dni}
                onChange={e => setDNI(e.target.value)}
                required />
            </label>

            <label>
                Rol:
                <select
                name="role"
                value={role}
                onChange={e => setRole(e.target.value)}
                required>
                <option key=""></option>
                <option key="admin">ADMINISTRATOR</option>
                </select>
            </label>

            <label>
                Password:
                <input
                name="password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                required />       
            </label>

            <button>Submit</button>
        </form>
    );
};

export default Login;