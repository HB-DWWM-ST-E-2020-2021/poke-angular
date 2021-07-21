import { Injectable } from '@angular/core';
import {AbstractApiService} from './abstract-api.service';
import {Pokemon} from './models/pokemon';
import {PokemonLite} from './models/pokemon-lite';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService extends AbstractApiService<Pokemon, PokemonLite>{
  constructor(
    httpClient: HttpClient,
  ) {
    super(httpClient, 'pokemon');
  }
}
