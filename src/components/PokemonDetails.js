import React, { Component } from "react";
import axios from "axios";

class PokemonDetails extends Component {
  constructor() {
    super();
    this.state = {
      poke: {},
    };
  }

  componentDidMount() {
    this.fetchPoketype();
  }

  fetchPoketype() {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((response) => {
        //console.log(response);

        this.setState({ poke: response.data });
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    const { poke } = this.state;
    return (
      <div className="card text-center">
        <div className="card-body">
          <h1>Name : {poke.name}</h1>
          <h1>ID : {poke.id}</h1>
          <h1>Height : {poke.height}</h1>
          <h1>Weight : {poke.weight}</h1>
        </div>
      </div>
    );
  }
}

export default PokemonDetails;
