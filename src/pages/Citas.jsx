import "../assets/stylesheets/Duenos.css";
import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function Citas(){

    
    const url="http://localhost:3003/citas"
    const [data, setData]= useState({
        fecha: "",
        hora: "",
        nombreDeMascota: "",
        servicioRequerido: ""


    })

    function Enviar(e){
        e.preventDefault();
        axios.post(url,{
            fecha: data.fecha,
            hora: data.hora,
            nombreDeMascota: data.nombreDeMascota,
            servicioRequerido: data.servicioRequerido
        })
        .then(res =>{
            console.log(res.data)
        })
        .catch(err =>{
            console.log(err)
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
                    <h3>Citas</h3>
                    <form className="was-validated">



                        <div className="input-group mb-3" >
                            <span class="input-group-text" id="inputGroup-sizing-default">Nombre mascota</span>
                            <input onChange={(e)=>handle(e)} id="nombreDeMascota" value={data.nombreDeMascota} type="text" class="form-control" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Servicio</span>
                            <input onChange={(e)=>handle(e)} id="servicioRequerido" value={data.servicioRequerido} type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-default" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Hora</span>
                            <input onChange={(e)=>handle(e)} id="hora" value={data.hora} type="time" className="form-control" required></input>
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Fecha</span>
                            <input onChange={(e)=>handle(e)} id="fecha" value={data.fecha} type="date" className="form-control" required></input>
                        </div>


                        <div class="btn-group" role="group" aria-label="Third group">
                            <Link to="/mascotas" className="btn btn-outline-primary" >Anterior</Link>

                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                        <button type="submit" class="btn btn-outline-success" onClick={(e)=>Enviar (e)}>Enviar</button>
                        </div>
                        <div class="btn-group" role="group" aria-label="Third group">
                        <Link to="/" className="btn btn-outline-primary">continuar</Link>

                        </div>
                    </form>

                </form>
            </div>
        </React.Fragment>
    );
}

export default Citas;