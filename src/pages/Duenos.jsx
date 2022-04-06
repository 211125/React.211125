import "../assets/stylesheets/Duenos.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";


function Usuario(){

    
    const url="http://localhost:3001/duenos"
    const [data, setData]= useState({
        celular: "",
        direccion: "",
        nombre: ""

    })

    function Enviar(e){
        e.preventDefault();
        axios.post(url,{
            celular: data.celular,
            direccion: data.direccion,
            nombre: data.nombre
        })
        .then(res =>{
            console.log(res.data)
        })
        alert("Datos Enviados")
        
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }




    return (
        <React.Fragment>

            <div className="xd">
        <form  className="form-box" id="form">
            <h3>Duenos</h3>
            <form className="was-validated">
                
                <div className="input-group mb-3" >
                <span className="input-group-text" id="inputGroup-sizing-default">Nombre</span>
                <input onChange={(e)=>handle(e)} id="nombre" value={data.nombre} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Direccion</span>
                    <input onChange={(e)=>handle(e)} id="direccion" value={data.direccion} type="text" className="form-control" aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-default" required></input>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Celular</span>
                    <input onChange={(e)=>handle(e)} id="celular" value={data.celular} type="text" className="form-control" required ></input>
                </div>


                <div class="btn-group" role="group" aria-label="Third group">
                    <Link to="/" className="btn btn-outline-primary" >Anterior</Link>                    
                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                <button type="submit" class="btn btn-outline-success" onClick={(e)=>Enviar(e)}>Enviar</button>

                </div>
                <div class="btn-group" role="group" aria-label="Third group">
                <Link to="/mascotas" className="btn btn-outline-primary">continuar</Link>
               </div>
            </form>

        </form>
                </div>

        </React.Fragment>
    );
}

export default Usuario;