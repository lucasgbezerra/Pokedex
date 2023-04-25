import { colors } from './styles/Colors';
import { Box, Flex } from '@chakra-ui/react'
import { PokemonCard } from './components/pokemonCard';
import { useEffect, useMemo, useState } from 'react';
import { getPokemonList } from './components/api/getPokemonList';
import { IPokemonList } from './services/pokemon';

export function App() {
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
    return pokemonList?.results?.map((pokemon) => (<PokemonCard url={pokemon?.url}/>))
  }

  return (
    <Flex
      flexDir='row'
      flexWrap="wrap"
      backgroundColor={colors.background[100]}
      minHeight="100vh"
      justifyContent="center"
      gap="50px"
    >
      {renderPokemons()}
    </Flex>
  )
}