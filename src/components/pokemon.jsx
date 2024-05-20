import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { PokeContext } from "../context/PokeContext";
const Pokemon = ()=>{
    const navigate = useNavigate()
 const {id} = useParams()
 const {pokes} = useContext(PokeContext)
 let estosPokemones = pokes.find((lospokemon) =>lospokemon.id == id)
 
console.log(estosPokemones)
    return(
        <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          
          <img src={estosPokemones.sprites.other.dream_world.front_default} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              {estosPokemones.name}
            </p>
            <button onClick={()=>navigate(`/pokemones`)} className="btn btn-primary">volver atras</button>
          </div>
        </div>
      </div>
    )    
}
export default Pokemon