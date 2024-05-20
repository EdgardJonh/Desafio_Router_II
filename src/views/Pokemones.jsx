import { useContext } from "react";
import { PokeContext } from "../context/PokeContext";
import Tarjetas from "../components/Tarjetas";

const Pokemones = () => {
    const {pokes}= useContext(PokeContext) 
    // console.log(pokes)

  return (
    <div className="fondoHome p-3">
      <div className="row">
        {pokes && pokes.map((losPokes)=>(<Tarjetas losPokemones={losPokes} key={losPokes.id}></Tarjetas>))}
        {/* <p className="fs-1" style={{ color: "white" }}>
          Selccione un pokemon
        </p>
        <div>
          <select className="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            
          </select>
        </div>
        <div className="m-3">
        <button type="button" className="btn btn-dark">Ver Detalle</button>
        </div> */}
      </div>
    </div>
  );
};
export default Pokemones;
