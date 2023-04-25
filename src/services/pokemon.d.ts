export interface IPokemonList {
  count: number;
  next: string;
  previous: string | null;
  results: IForm[];
}

export interface IPokemon {
  abilities: IAbality[];
  base_experience: number;
  forms: IForm[];
  game_indices: IGameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  species: IForm;
  stats: IStat[];
  types: IType[];
  weight: number;
  sprites: {
    front_default: string
  }
}

interface IAbality {
  ability: IForm;
  is_hidden: boolean;
  slot: number;
}

interface IForm {
  name: string;
  url: string;
}

interface IGameIndex {
  game_index: number;
  version: IForm;
}

interface IMove {
  move: IForm;
}

interface IStat {
  base_stat: number;
  effort: number;
  stat: IForm;
}

interface IType {
  slot: number;
  type: IForm;
}