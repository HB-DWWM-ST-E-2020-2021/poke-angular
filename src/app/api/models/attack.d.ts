import {Type} from './type';

export interface Attack {
  id: number;
  name: string;
  pp: number;
  accuracy: number;
  power: number;
  type: Type;
}
