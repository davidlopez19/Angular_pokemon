import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent {

  @Input()
  pokemonChildren: Pokemon | null = null;

  @Input()
  nameButton: string | null = null;

  @Output()
  pokemonEventEmitter = new EventEmitter();

  pokemonChange() {
    this.pokemonEventEmitter.emit(this.pokemonChildren?.id);
  }


}
