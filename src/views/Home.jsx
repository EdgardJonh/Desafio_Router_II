
import pika from '../assets/pik.png'

const Home = () => {
 
  return (
    
    <div className="row d-flex justify-content-center fondoHome">
      <div className="col-md-8 Home m-3">
        <p className="fs-1" style={{color:'white'}}>Bienvenido Maestro Pokemon</p>
        <img src={pika} style={{width:'60%'}} alt="" />
      </div>
    </div>
  );
};
export default Home;
