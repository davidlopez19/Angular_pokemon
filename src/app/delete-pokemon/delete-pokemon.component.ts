import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-delete-pokemon',
  templateUrl: './delete-pokemon.component.html',
  styleUrls: ['./delete-pokemon.component.css']
})
export class DeletePokemonComponent {
  constructor(private _pokemonService: PokemonService) {
  }

  @Input()
  pokemonForDelete: Pokemon | null = null;

  @Output()
  pokemonDeleteIsSuccess = new EventEmitter();

  nameButton = "delete";

  deletePokemon(idPokemon: number) {
    this._pokemonService.deletePokemon(idPokemon);
    this.pokemonDeleteIsSuccess.emit();
  }

}
