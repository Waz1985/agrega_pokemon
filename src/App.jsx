import React, { useState } from "react";
import FormPokemon from "./components/FormPokemon/FormPokemon";
import PokemonAtrapados from "./components/PokemonAtrapados/PokemonAtrapados";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const addPokemonHandler = (pokemonNuevo) => {
    setPokemon((oldpokemon) => [...oldpokemon, pokemonNuevo]);

  };

  return (
    <div>
      <FormPokemon addPokemon={addPokemonHandler} />
      <PokemonAtrapados listPokemons={pokemon}/>
    </div>
  );
}

export default App;
