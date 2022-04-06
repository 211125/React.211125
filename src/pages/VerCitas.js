import '../assets/stylesheets/VerCitas.css';
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';



function VerCitas(){

    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:3003/citas')
        .then(res =>{
            console.log(res.data)
            setData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])


    const postDelete = (id,e) =>{
        e.preventDefault();
        axios.delete(`http://localhost:3003/citas/${id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

    const arr = data.map((data, index)=>{
        return(
            <tr className="fila_impar">
                <td>{data.id}</td>
                <td>{data.nombreDeMascota}</td>
                <td>{data.servicioRequerido}</td>
                <td>{data.fecha}</td>
                <td>{data.hora}</td>
                <td><button onClick={(e) => postDelete(data.id, e)} type="button" class="btn btn-outline-danger btn-sm">Eliminar</button></td>
            </tr>
        );
    })


    return (
        <React.Fragment>

            <table border="1">
                <tr>
                    <th>ID</th>
                    <th>Nombre de la mascota</th>
                    <th>servicios</th>
                    <th>fecha</th>
                    <th>hora</th>
                    <th></th>

                </tr>
                {arr}
            </table>
            <div className="mb-3">

                <Link to="/" className="btn btn-outline-primary"  >Atras</Link>

            </div >

        </React.Fragment>
    );
}

export default VerCitas;