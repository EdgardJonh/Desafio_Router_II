import { createContext, useEffect, useState } from "react";
export const PokeContext = createContext()
const PokeProvider = ({children})=>{
    const [pokes, setPokes]= useState([])
    const [offset, setOffset] = useState(0);
    const pokeData = async(limit = 50)=>{
        const baseURL = 'https://pokeapi.co/api/v2/';

		const res = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=${offset}` // empieza en 0 y el limite son 50 pokemones
		);
		const data = await res.json();

		const promises = data.results.map(async pokemon => {
			const res = await fetch(pokemon.url);
			const data = await res.json();
			return data;
		});
		const results = await Promise.all(promises);

        setPokes(results)
    }
   
    useEffect(()=>{
        pokeData()
    },[])
    return(
        <PokeContext.Provider value={{pokes, setPokes}}>
            {children}
        </PokeContext.Provider>
    )
}
export default PokeProvider