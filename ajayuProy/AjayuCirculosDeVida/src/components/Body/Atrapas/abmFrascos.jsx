import {useEffect, useState} from "react";
import {getAllTasks} from '../../../api/abm.api'
import "./atrapas.css";

function AbmFrascos(){
    const [articulos, setArticulos] = useState([]);
    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks()
            setArticulos(res.data)
        }
        loadTasks()
    }, []);
    return (
        <div className="atrapas">
            {articulos
                .filter((articulo) => articulo.Categoria === "Frascos")
                .map(articulo => (
                    <div className="unidad" key={articulo.id}>
                        <img
                            className="card"
                            // key={articulo.id}
                            alt={articulo.name}
                            src={articulo.imagen}
                        />
                        {/* <h1>{articulo.name}</h1>
                        <p>{articulo.Color}</p>
                        <p>{articulo.Largo}</p>
                        <p>{articulo.Circunsferencia}</p> */}
                        <span>
                            <p>Art.: {articulo.name}</p>
                            <p>Color: {articulo.Color}</p>
                            <p>Largo: {articulo.Largo}</p>
                            <p>Circunsferencia: {articulo.Circunsferencia}</p>
                        </span>
                    </div>
                ))
            }
        </div>
    )
}

export default AbmFrascos