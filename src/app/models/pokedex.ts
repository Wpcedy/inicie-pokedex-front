import { Pokemon } from "./pokemon";

export interface Pokedex {
    total: number,
	proximo: string,
	anterior: string,
	pokemon: Pokemon[],
}
