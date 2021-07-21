import { Component, OnInit } from '@angular/core';
import {PokemonApiService} from '../api/pokemon-api.service';
import {PokemonLite} from '../api/models/pokemon-lite';
import {Router} from '@angular/router';
import {AuthenticationService} from '../api/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemon: Array<PokemonLite> = [];

  constructor(
    private pokemonApi: PokemonApiService,
    private router: Router,
    private authenticationService: AuthenticationService,
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

  logout(): void {
    // Remove JWT from local storage.
    localStorage.removeItem('access_token');

    // Redirect to login page.
    this.router.navigate(['login']);
  }

  canLogout(): boolean {
    return this.authenticationService.hasToken();
  }
}
