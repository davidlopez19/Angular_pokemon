import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonArray: Array<Pokemon> = [{ "id": 1, "imageUrl": "", "typePokemon": "agua", "name": "Bulbasaur" }, { "id": 2, "imageUrl": "", "typePokemon": "planta", "name": "Ivysaur" }, { "id": 3, "imageUrl": "", "typePokemon": "planta", "name": "Venusaur" }, { "id": 4, "imageUrl": "", "typePokemon": "fuego", "name": "Charmander" }];

  constructor() { }

  getListPokemons() {
    return this.pokemonArray;
  }

  addPokemon(pokemon: Pokemon) {
    pokemon.id = this.pokemonArray.length + 1;
    this.pokemonArray.push(pokemon);
  }

  deletePokemon(id: number) {
    let idForDelete = this.pokemonArray.findIndex(x => x.id == id);
    this.pokemonArray.splice(idForDelete, 1);
  }

}
