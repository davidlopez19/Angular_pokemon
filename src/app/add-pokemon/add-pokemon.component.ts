import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent {

  pokemon: Pokemon = new Pokemon();
  pokemonFromDetail: string = "";
  constructor(
    private _pokemonService: PokemonService,
    private _router: Router
  ) { }

  saveInformation() {
    this._pokemonService.addPokemon(this.pokemon);
    alert("se añadio un pokemon nuevo");
    // this._router.navigateByUrl("list-pokemon");
  }

  showInfoDetail(data: string) {
    this.pokemonFromDetail = data;
  }

}
