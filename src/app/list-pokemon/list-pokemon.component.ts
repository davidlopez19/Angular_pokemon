import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';
import { RestService } from '../services/rest.service';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemonArray: Array<Pokemon> = [];
  pokemonSelected: Pokemon | null = null;
  pokemonForDelete: Pokemon | null = null;
  pokemonFromDetail: string = "";
  displayStyle: string = "none";
  showAlertSuccess = false;
  @ViewChild('content') modalForDelete: any;
  @ViewChild('content_detail') modalForDetail: any;

  constructor(
    private _pokemonService: PokemonService,
    private _restService: RestService,
    private modalService: NgbModal
  ) { }
  closeResult = '';

  ngOnInit(): void {
    this.pokemonArray = this._pokemonService.getListPokemons();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  timeLeft: number = 60;
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      this._restService.getFrase().subscribe(result => (
        console.log(result)
      ));
    }, 1000)
  }

  showPokemon(pokemon: Pokemon) {
    this.pokemonSelected = pokemon;
    this.open(this.modalForDetail);
  }

  deletePokemon(pokemon: Pokemon) {
    this.open(this.modalForDelete);
    this.pokemonForDelete = pokemon;
  }
  successDelete() {
    this.showAlertSuccess = true;
  }

  selectedPokemonToWatch(data: string) {

    this.pokemonFromDetail = data;
  }
}
