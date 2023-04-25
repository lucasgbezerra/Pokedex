import { api } from '../../services'
import { parseUrl } from '../../utils/parseUrl';
import { IPokemon, IPokemonList } from '../../services/pokemon';

export async function getPokemonList(page?: number) {
  try {
    const pageNumber = () => {
      if(page){
        return page
      }
      return 1
    }
    const offset: number = 12 * (pageNumber() - 1);
    const response = await api.get<IPokemonList>(`/pokemon/?limit=10&offset=${offset}`)
    return response.data
  } catch (error) {
    return null
  }
}

export async function getPokemon(url: string) {
  try {
    const pokemonUrl = parseUrl(url)
    const response = await api.get<IPokemon>(pokemonUrl)
    return response.data
  } catch (error) {
    return null
  }
}
