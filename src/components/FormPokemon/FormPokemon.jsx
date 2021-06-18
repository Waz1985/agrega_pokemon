import React, { useState } from "react";

const FormPokemon = ({addPokemon}) => {
  const [pokemon, setPokemon] = useState({
    nombre: "",
    tipo: "",
    evolucion: ""
  });

  const onSubmitHandler = () => {
    addPokemon(pokemon);
    setPokemon((oldPokemon)=>({...oldPokemon, nombre:'', tipo:'', evolucion: '' }))
  };

  const onNombreChangeHandler = (event) => {
    setPokemon((pokemon) => ({ ...pokemon, nombre: event.target.value }));
  };

  const onTipoChangeHandler = (event) => {
    setPokemon((pokemon) => ({ ...pokemon, tipo: event.target.value }));
  };

  const onEvolucionChangeHandler = (event) => {
    setPokemon((pokemon) => ({ ...pokemon, evolucion: event.target.value }));
  };

  return (
    <div className="d-flex flex-row ">
      <div className="input-group mb-3 p-2 align-items-center">
        <label for="exampleFormControlInput1">
          <strong>Nombre</strong>
        </label>
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={onNombreChangeHandler}
          value={pokemon.nombre}
        />
      </div>
      <div className="input-group mb-3 p-2 align-items-center">
        <label for="exampleFormControlInput1">
          <strong>Tipo</strong>
        </label>
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={onTipoChangeHandler}
          value={pokemon.tipo}
        />
      </div>
      <div className="input-group mb-3 p-2 align-items-center">
        <label for="exampleFormControlInput1">
          <strong>Evolucion</strong>
        </label>
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={onEvolucionChangeHandler}
          value={pokemon.evolucion}
        />
      </div>
      <input type="button" value="Registrar" className="btn btn-primary" onClick={onSubmitHandler} />
    </div>
  );
};
export default FormPokemon;
