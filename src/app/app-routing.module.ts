import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';

const routes: Routes = [
  {
    path: "list-pokemon", component: ListPokemonComponent
  },
  {
    path: "add-pokemon", component: AddPokemonComponent
  },
  {
    path: "delete-pokemon", component: DeletePokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
