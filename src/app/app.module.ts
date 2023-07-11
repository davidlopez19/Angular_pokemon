import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { FormsModule } from '@angular/forms';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletePokemonComponent } from './delete-pokemon/delete-pokemon.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonComponent,
    AddPokemonComponent,
    DetailPokemonComponent,
    DeletePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
