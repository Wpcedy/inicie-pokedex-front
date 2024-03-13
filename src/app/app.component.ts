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

  nomePokemonInfo = '';
  tipoPrimarioPokemonInfo = '';
  tipoSecundarioPokemonInfo = '';
  numeroPokemonInfo = 0;
  imagemPokemonInfo = '';
  alturaPokemonInfo = '';
  pesoPokemonInfo = '';
  hpPokemonInfo = 0;
  ataquePokemonInfo = 0;
  defesaPokemonInfo = 0;
  ataqueEspecialPokemonInfo = 0;
  defesaEspecialPokemonInfo = 0;
  velocidadePokemonInfo = 0;

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

  selectPokemon(pokemon: Pokemon) {
    this.nomePokemonInfo = pokemon.nome;
    this.tipoPrimarioPokemonInfo = pokemon.tipos[0].nome;
    this.tipoSecundarioPokemonInfo = ((pokemon.tipos.length > 1) ? pokemon.tipos[1].nome : '');
    this.numeroPokemonInfo = pokemon.numero;
    this.imagemPokemonInfo = pokemon.imagem;
    this.alturaPokemonInfo = pokemon.altura;
    this.pesoPokemonInfo = pokemon.peso;
    this.hpPokemonInfo = pokemon.status[0].valor;
    this.ataquePokemonInfo = pokemon.status[1].valor;
    this.defesaPokemonInfo = pokemon.status[2].valor;
    this.ataqueEspecialPokemonInfo = pokemon.status[3].valor;
    this.defesaEspecialPokemonInfo = pokemon.status[4].valor;
    this.velocidadePokemonInfo = pokemon.status[5].valor;
  }
}
