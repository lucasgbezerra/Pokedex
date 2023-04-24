import { Box } from "@chakra-ui/react";
import { Pokemon } from "../../types/Pokemon";
import { api } from '../../services'

type PokedexProps = {
    setModal: (value: boolean) => void;
    setPokemonData: (data: Pokemon) => void;
    pokemonList: Pokemon[];
    setPokemonList: (data: Pokemon[]) => void;
    pokemonAmount: number;
    setPokemonAmount: (value: number) => void;
    error: boolean;
    loading: boolean;
    setLoading: (value: boolean) => void;
    page: number;
    setPage: (value: number) => void;
    showPagination: boolean;
    setShowPagination: (value: boolean) => void;
    disabledButton: boolean;
    searchBarRef: React.MutableRefObject<HTMLDivElement>;
}



export const Pokedex = () => {

    return (
        <Box>
        </Box>
    )
}