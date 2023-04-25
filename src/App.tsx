import { colors } from './styles/Colors';
import { Box, Flex } from '@chakra-ui/react'
import { PokemonCard } from './components/pokemonCard';
import { useEffect, useMemo, useState } from 'react';
import { getPokemonList } from './components/api/getPokemonList';
import { IPokemonList } from './services/pokemon';
import { Pokedex } from './components/pokedex';

export function App() {

  return (
    <Box
      backgroundColor={colors.background[100]}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Pokedex />
    </Box>
  )
}