import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokedex } from '../models/pokedex';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = "http://localhost:8000";

  constructor(private http : HttpClient) { }

  getPokedex() {
    return this.http.get<Pokedex>(`${this.apiUrl}/pokemon`);
  }

  buscarPokemon(nome: string) {
    let params = new HttpParams().set('pokemon', nome);

    return this.http.get<Pokedex>(`${this.apiUrl}/pokemon`, { params: params });
  }

  mudarLista(url: string) {
    let params = new HttpParams().set('url', url);

    return this.http.get<Pokedex>(`${this.apiUrl}/pokemon`, { params: params });
  }
}
