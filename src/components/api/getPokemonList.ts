import { AxiosResponse } from 'axios';
import { api } from '../../services'

export const getPokemonList = async (page: number) => {
    const offset: number = 12 * (page - 1);

    const response = await api.get<{ result: AxiosResponse }>(`/pokemon/?limit=10&offset=${offset}`)
    console.log('Response: ', response)

}


