import { Status } from "./status";
import { Tipo } from "./tipo";

export interface Pokemon {
    numero: number,
	nome: string,
	altura: string,
	peso: string,
	imagem: string,
	tipos: Tipo[],
	status: Status[],
}
