import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokedex } from './models/pokedex';
import { Pokemon } from './models/pokemon';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  apiService = inject(ApiService);
  nomePokemon = '';
  total = 0;
  proximo = '';
  anterior = '';
  pokemonList: Pokemon[] = [];

  ngOnInit(): void {
    this.apiService.getPokedex().subscribe((data: Pokedex) => {
      this.total = data.total;
      this.proximo = data.proximo;
      this.anterior = data.anterior;
      this.pokemonList= data.pokemon;
    });
  }

  buscar(): void {
    this.apiService.buscarPokemon(this.nomePokemon).subscribe((data: Pokedex) => {
      this.limparDados();
      this.total = data.total;
      this.proximo = data.proximo;
      this.anterior = data.anterior;
      this.pokemonList = data.pokemon;
    });
  }

  proximoLista(): void {
    this.apiService.mudarLista(this.proximo).subscribe((data: Pokedex) => {
      this.limparDados();
      this.total = data.total;
      this.proximo = data.proximo;
      this.anterior = data.anterior;
      this.pokemonList = data.pokemon;
    });
  }

  anteriorLista(): void {
    this.apiService.mudarLista(this.anterior).subscribe((data: Pokedex) => {
      this.limparDados();
      this.total = data.total;
      this.proximo = data.proximo;
      this.anterior = data.anterior;
      this.pokemonList = data.pokemon;
    });
  }

  limparDados(): void {
    this.total = 0;
    this.proximo = '';
    this.anterior = '';
    this.pokemonList= [];
  }

  mudarNome(event: Event) {
    this.nomePokemon = (event.target as HTMLInputElement).value;
  }
}
