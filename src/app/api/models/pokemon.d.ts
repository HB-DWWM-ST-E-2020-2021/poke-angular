import {Type} from './type';
import {Attack} from './attack';

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokedexOrder: number;
  types: Array<Type>;
  attacks: Array<Attack>;
}
