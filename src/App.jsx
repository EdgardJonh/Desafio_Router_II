import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokemones from "./views/Pokemones";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Pokemon from "./components/pokemon";
import PokesProvider from "./context/PokeContext";
function App() {
  return (
    <>
      <BrowserRouter>
        <PokesProvider>
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="/pokemon/:id" element={<Pokemon />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </PokesProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
