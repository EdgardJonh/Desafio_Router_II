import { useNavigate } from "react-router-dom";

const Tarjetas = ({losPokemones}) => {
    const navigate = useNavigate()
    // console.log(losPokemones)
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "18rem" }}>
        
        <img src={losPokemones.sprites.other.dream_world.front_default} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            {losPokemones.name}
          </p>
          <button onClick={()=>navigate(`/pokemon/${losPokemones.id}`)} className="btn btn-primary"> Ver Detalle</button>
        </div>
      </div>
    </div>
  );
};
export default Tarjetas;