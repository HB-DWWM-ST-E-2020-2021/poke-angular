import { Component, OnInit } from '@angular/core';
import {PokemonApiService} from '../api/pokemon-api.service';
import {PokemonLite} from '../api/models/pokemon-lite';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemon: Array<PokemonLite> = [];

  constructor(
    private pokemonApi: PokemonApiService,
  ) { }

  ngOnInit(): void {
    this.pokemonApi.getCollection().subscribe(
      (data) => {
        this.pokemon = data['hydra:member'];
      },
      () => {
        alert('Cannot load Pokemon');
      },
    );
  }
}
