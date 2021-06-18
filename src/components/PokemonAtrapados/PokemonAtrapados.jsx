const PokemonAtrapados = ({ listPokemons }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">Registro de Pokemon</li>

        <li className="list-group-item list-group-item-primary">
          {listPokemons.map((pokemon) => (
            <p>
              <label>Nombre: {pokemon.nombre}</label> -{" "}
              <label>Tipo: {pokemon.tipo}</label> -{" "}
              <label>Evolucion: {pokemon.evolucion}</label>
            </p>
          ))}
        </li>
      </ul>
    </div>
  );
};
export default PokemonAtrapados;
