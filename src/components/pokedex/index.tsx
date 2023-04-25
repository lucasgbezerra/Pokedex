import { Flex } from "@chakra-ui/react";
import { Pokemon } from "../../types/Pokemon";
import { api } from '../../services'
import { getPokemonList } from "../api/getPokemonList";
import { useEffect, useState } from "react";
import { PokemonCard } from "../pokemonCard";
import { IPokemonList } from "../../services/pokemon";


export const Pokedex = () => {
    const [pokemonList, setPokemonList] = useState<IPokemonList | null>(null)

    const listPokemons = async () => {
        await await getPokemonList()
            .then((response) => setPokemonList(response))
            .catch((error) => {
                console.error(`An unexpected error ocourred while getting pokemons`);
            });
    };

    useEffect(() => {
        listPokemons()
    }, [])

    const renderPokemons = () => {
        return pokemonList?.results?.map((pokemon) => (<PokemonCard url={pokemon?.url} />))
    }
    return (
        <Flex
            flexDir='row'
            flexWrap="wrap"
            maxW='60%'
            margin='auto'
            gap="32px"
        >
            {renderPokemons()}
        </Flex>
    )
}